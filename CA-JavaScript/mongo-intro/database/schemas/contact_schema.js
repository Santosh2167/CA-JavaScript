const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    enquiry: {
        type: String
    } 
});

module.exports = ContactSchema;