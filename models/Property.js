const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: Boolean,
        required: false
    }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
