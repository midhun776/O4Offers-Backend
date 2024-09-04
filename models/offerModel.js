const mongoose = require('mongoose')
const db = require('../config/db')

const { Schema } = mongoose

const offerSchema = new Schema({
    offerId: { type:String, required: true },
    offerOwner: { type:String, required: true, ref: 'Supermarkets' },
    offerTitle: { type:String, required: true },
    offerDescription: { type:String, required: true },
    offerStart: { type:String, required: true },
    offerEnd: { type:String, required: true },
    offerBanners: { type: Array, default: []},
});

const OfferModel = db.model('Offers', offerSchema);

module.exports = OfferModel