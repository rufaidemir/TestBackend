const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const userSchama = new Schema({
    first_name: {
        type: String,
        required: false
    },
    second_name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    statusMessage: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: false
    },
    profileImageUrl:{
        type: String,
        required: false
    },


},{ timestamps:true });


userSchama.index({ username:'text', first_name:'text', second_name:'text'},{ weights :{ username: 2, first_name:1, second_name:1}})

module.exports = mongoose.model('User', userSchama);