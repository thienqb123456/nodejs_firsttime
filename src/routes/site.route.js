const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/home', siteController.home);
router.get('/search', siteController.search);
router.get('/contact', siteController.contact);

router.get('/', siteController.home);

module.exports = router;
