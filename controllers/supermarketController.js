const SupermarkrtService = require("../services/supermarketService");

exports.register = async(req, res, next) => {
    try {
        const { smID, smName, smPhone, smLogo,
                smAddress, smWebsite, 
                smEmail, smPassword} = req.body;

        const successRes = SupermarkrtService.register(
            smID, smName, smPhone, smLogo, smAddress, 
            smWebsite, smEmail, smPassword);
        
        res.json({status: true, success:successRes+": Supermarket Registered Successfully!"});
    } catch (error) {
        throw error
    }
}

exports.getAll = async(req, res, next) => {
    try {
        let allSupermarkets = await SupermarkrtService.getAll();
        res.json({status: true, data: allSupermarkets});
    } catch (error) {
        throw error
    }
}