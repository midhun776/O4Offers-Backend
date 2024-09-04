const OfferModel = require("../models/offerModel");

class OfferService{
    static async getAllOffers(){
            try {
                const allOffers = await OfferModel.find({});
                return allOffers;
            } catch (error) {
                throw error;
            }
        }  
}

module.exports = OfferService;