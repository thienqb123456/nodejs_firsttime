const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const Moment = new Schema(
    {
        name: { type: String },
        image: { type: String },
        videoId: { type: String },
        author: { type: String },
        description: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    }
);

// add Plugin
mongoose.plugin(slug);
Moment.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('moments', Moment);
