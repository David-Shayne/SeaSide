const express = require('express');
const router = express.Router();
const cors = require('cors');
const Property = require('../models/Property');

router.use(cors());

router.get('/', (req, res) => {
    Property.find().then(data => res.json(data));
});

router.get('/:category', (req, res) => {
    Property.find({ category: req.params.category }).then(properties =>
        res.json(properties)
    );
});

router.post('/', (req, res) => {
    const newProperty = new Property({
        name: req.body.name,
        category: req.body.category,
        location: req.body.location,
        img: req.body.img,
        description: req.body.description
    });
    newProperty.save().then(property => res.json(property));
});

router.delete('/:id', (req, res) => {
    Property.findByIdAndRemove(req.params.id).then(
        res.json({ removed: 'success' })
    );
});

router.get('/name/:name', (req, res) => {
    Property.find({ name: { $regex: req.params.name, $options: 'i' } }).then(
        properties => {
            res.json(properties);
        }
    );
});
module.exports = router;
