const express = require('express');
const router = express.Router();

// List all routes
router.get('/', (req, res) => {
    const abouts = [
       'asdsa',
       123,
    ]
    res.status(200).json(abouts);
});



module.exports = router;


