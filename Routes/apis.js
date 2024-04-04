const express = require('express');
const router = express.Router();
const getDB = require('../database');
const controllers = require('../controllers/apiController');


router.get('/',controllers.main);
router.get('/ingest',controllers.ingestData);

router.get('/events/find',controllers.findEvents);




module.exports = router;
