const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type:String,
        require: true
    }
    bio: {
        type: String,
        default: "No bio entered"

    }

    gender: {
        type: String,
        enum: ["male","famale","non binary"],
        default: "non binary"
    }
});

module.exports = AuthorSchema;