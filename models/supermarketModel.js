const mongoose = require('mongoose')
const db = require('../config/db')
const bcrypt = require("bcrypt");

const { Schema } = mongoose

const supermarketSchema = new Schema({
    smID: { type:String, required: true },
    smName: { type:String, required: true },
    smPhone: { type:String, lowercase: true, required: true },
    smLogo: { type:String, required: true },
    smAddress: { type:String, required: true },
    smWebsite: { type:String},
    smEmail: { type:String, lowercase: true, required: true },
    smPassword: { type:String, required: true },
});

supermarketSchema.pre('save', async function() {
    try {
        var supermarket = this;
        const salt = await(bcrypt.genSalt(10));
        const hashPass = await bcrypt.hash(user.smPassword,salt);

        //Password Encryption
        supermarket.smPassword = hashPass;
        //Password Encryption
    } catch (error) {
        
    }
})

const SupermarketModel = db.model('Supermarkets', supermarketSchema);

module.exports = Su