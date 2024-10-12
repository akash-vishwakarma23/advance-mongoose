const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testingadvacommand");

const userSchema = mongoose.Schema({
    username: String,
    nmae : String,
    email: String,
    password: String,
    age: String,
    isMarried: Boolean
})

module.exports = mongoose.model("user", userSchema);
