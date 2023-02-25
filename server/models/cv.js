const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CvSchema = new Schema({
    Firstname: {
        type: String,
        required: false
    },
    Lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
    },
    numberphone: {
        type: Number,
        required: false
    },
        adress: {
        type: String,
        required: false
    },
    aboutus: {
        type: String,
        required: false
    },
    datedebut: {
        type: Date,
        required: false
    },
    datafin: {
        type: Date,
        required: false
    },
    formation: {
        type: String,
        required: false
    },
    etablisment: {
        type: String,
        required: false
    },
    ville: {
        type: String,
        required: false
    },
    profile: {
        type: String,
        required: false
    },
    Post: {
        type: String,
        required: false
    },
    formation: {
        type: String,
        required: false
    },
    competance: {
        type: String,
        required: false
    },
    niveau: {
        type:String,
        required: false
    },
    etablisment: {
        type: String,
        required: false
    },
    langue: {
        type: String,
        required: false
    },
    certificat: {
        type: String,
        required: false
    },
qualité: {
        type: String,
        required: false
    },
    // certificat
    datedebcertif: {
        type: String,
        required: false
    },
    datefincertif: {
        type: String,
        required: false
    },
    descripcertif:{
        type:String,
        required:false
    }
    
});

module.exports = mongoose.model('CV', CvSchema);
