const siteRouter = require('./site.route');
const momentsRouter = require('./moments.route');
const meRouter = require('./me.route');

function route(app) {
    app.use('/moments', momentsRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
