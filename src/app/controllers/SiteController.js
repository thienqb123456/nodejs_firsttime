const Moment = require('../models/Moment');

class SiteController {
    // [GET] 'home'
    async home(req, res, next) {
        try {
            const moments = await Moment.find({});
            res.status(200).render('moments/moments.hbs', { moments });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('site/search.hbs');
    }

    // [GET] 'contact'
    contact(req, res) {
        res.render('site/contact.hbs');
    }
}

module.exports = new SiteController();
