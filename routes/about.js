const express = require('express');
const router = express.Router();

// List all routes
router.get('/', (req, res) => {
    const abouts = [
        "/api/course/result"
           ];
    res.status(200).json(abouts);
});


module.exports = router;
