const Moment = require('../models/Moment');

class MomentController {
    // [GET] /moments/
    async index(req, res) {
        try {
            const moments = await Moment.find({});
            res.status(200).render('moments/moments.hbs', { moments });
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // [GET] moments /:slug
    async show(req, res) {
        try {
            const moment = await Moment.findOne({ slug: req.params.slug });
            res.status(200).render('moments/show.hbs', { moment });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [GET] moments/create
    create(req, res, next) {
        res.render('moments/create.hbs');
    }

    // [POST] moments/store
    async store(req, res) {
        try {
            const moment = await new Moment(req.body);
            const newMoment = await moment.save(); //save to database
            res.status(200).redirect('/moments');
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // [GET] moments/:id/edit
    async edit(req, res) {
        try {
            const moment = await Moment.findById(req.params.id);
            res.status(200).render('moments/edit', { moment });
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // [PUT] moments/:id
    async update(req, res) {
        try {
            await Moment.updateOne({ _id: req.params.id }, req.body);
            res.status(200).redirect('/me/stored/moments');
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [DELETE] moments/:id   soft detele
    async delete(req, res) {
        try {
            await Moment.delete({ _id: req.params.id });
            res.status(200).redirect('back');
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [PATCH] moments/:id/restore
    async restore(req, res) {
        try {
            await Moment.restore({ _id: req.params.id });
            res.status(200).redirect('back');
        } catch (err) {
            res.status(500).json(err);
        }
    }
    // [DELETE] moments/:id/force
    async forceDelete(req, res) {
        try {
            await Moment.deleteOne({ _id: req.params.id });
            res.status(200).redirect('back');
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // [POST] moments/form-actions
    async actionForm(req, res) {
        switch (req.body.action) {
            case 'delete':
                try {
                    await Moment.delete({ _id: { $in: req.body.momentIds } });
                    res.status(200).redirect('back');
                } catch (err) {
                    res.status(500).json(err);
                }
                break;
            case 'restore':
                try {
                    await Moment.restore({ _id: { $in: req.body.momentIds } });
                    res.status(500).redirect('back');
                } catch (err) {
                    res.status(500).json(err);
                }
                break;
            default:
        }
    }
}

module.exports = new MomentController();
