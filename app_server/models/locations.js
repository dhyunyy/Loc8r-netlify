const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number,'default': 0, min: 0,max: 5},
    reviewText : String,
    createdOn: {
        type: Date, 'default': Date.now
    }
})

const locationSchema = new mongoose.Schema({
    name: {type: String, require: true},
    address: String,
    ratimg: {type: Number,'default': 0, min: 0,max: 5},
    facilities: [String],
    coords: {type: {type:String}, coordinates: [Number]},
    openingTimes: [openingTimeSchema]
});
locationSchema.index({coords: '2dsphere'});