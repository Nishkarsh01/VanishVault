const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    textContent:{
        type:String,
        require:true
    }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
