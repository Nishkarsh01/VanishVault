const Note = require("../models/noteModel");
const User = require('../models/userModel');
const expressAsyncHandler = require("express-async-handler");
const NodeRSA = require("node-rsa");

const createNote = expressAsyncHandler(async(req,res)=>{
    const {receiverEmail, content} = req.body;
    const sendTo = await User.findOne({email: receiverEmail});
    const sender = await User.findOne({_id: req.user._id});
    //console.log(content);
    const key = new NodeRSA(sendTo.publicKey)
    const encryptedContent = key.encrypt(content, 'base64');
    //console.log(encryptedContent);

    const note = await Note.create({
        sender: sender,
        to: sendTo,
        textContent: encryptedContent
    })
    if(note) res.json(note);
});

const readNote = expressAsyncHandler(async(req,res)=>{
    const noteId = req.params.noteId;
    const note = await Note.findOne({_id: noteId});
    const user = await User.findById(req.user._id);

    if(note.to.toString() != user._id.toString()){
        res.send("Not your note");
        return
    }
    const key = new NodeRSA(user.privateKey);
    const decryptedContent = key.decrypt(note.textContent, 'utf8');
    res.send(decryptedContent)

    await Note.findByIdAndDelete(noteId);
})

const fetchNotes = expressAsyncHandler(async(req,res)=>{
    const notes = await Note.find({to: req.user._id}).select("-textContent ");
    if(notes){
        res.json(notes);
    } else {
        res.status(404);
    }
})

module.exports = {createNote, readNote, fetchNotes};