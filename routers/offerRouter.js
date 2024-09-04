const router = require("express").Router();
const OfferController = require("../controllers/offerController")

router.get("/getAllOffers", OfferController.getAllOffers);

module.exports = router