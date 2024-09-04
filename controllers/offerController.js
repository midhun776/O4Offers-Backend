const OfferService = require("../services/offerService")

exports.getAllOffers = async(req, res, next) => {
    try {
        let allOffers = await OfferService.getAllOffers();
        res.json({status: true, data: allOffers});
    } catch (error) {
        throw error
    }
}