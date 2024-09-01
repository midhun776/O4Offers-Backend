const router = require("express").Router(); 
const SupermarketController = require('../controllers/supermarketController')

router.get('/getAll', SupermarketController.getAll);
router.post('/register', SupermarketController.register);

module.exports = router;