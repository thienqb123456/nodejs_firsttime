const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/moments', meController.storedMoments);
router.get('/trash/moments', meController.trashMoments);

module.exports = router;
