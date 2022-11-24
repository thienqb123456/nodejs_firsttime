const Moment = require('../models/Moment');

class MeController {
    // [GET] /me/stored/moments

    storedMoments(req, res, next) {
        Promise.all([Moment.find({}), Moment.countDocumentsDeleted()])
            .then(([moments, deletedCount]) =>
                res.render('me/stored-moments', { moments, deletedCount })
            )
            .catch(next);
    }

    // [GET] /me/trash/moments
    trashMoments(req, res, next) {
        Moment.findDeleted({})
            .then((moments) => res.render('me/trash-moments', { moments }))
            .catch(next);
    }
}

module.exports = new MeController();
