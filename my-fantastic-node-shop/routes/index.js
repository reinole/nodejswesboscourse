const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here

router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));

router.get('/add', storeController.addStore);
//catchError håndterer hvis Store får noen problemer. Brukes istede for try catch
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
