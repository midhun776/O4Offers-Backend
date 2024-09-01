const SupermarketModel = require("../models/supermarketModel");


class SupermarketService{
    static async register(
        smID, smName, smPhone, smLogo,
        smAddress, smWebsite, smEmail, smPassword){
            try {
                const supermarket = new SupermarketModel({
                    smID, smName, smPhone, smLogo,
                    smAddress, smWebsite, smEmail, smPassword
                });
                return await supermarket.save();
            } catch (error) {
                throw error;
            }
        }

    static async getAll(){
            try {
                const allSupermarkets = await SupermarketModel.find({});
                return allSupermarkets;
            } catch (error) {
                throw error;
            }
        }  
}

module.exports = SupermarketService;