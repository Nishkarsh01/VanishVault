const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    textContent:{
        type:String,
        require:true
    },
    isRead:{
        type: Boolean,
        default: false
    }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;