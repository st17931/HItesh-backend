const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        index:true,// Increases the search optimization
        trim:true //removes the whitespaces---(spaces / and newlines) e.g ' hello world '----trim---> 'hello world'
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    fullName: {
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    watchHistory:{
        type:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
            }
        ]
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;