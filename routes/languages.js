var express = require('express');
var router = express.Router();

const language = require('../services/languages');

/* GET languages listing. */
router.get('/', async function(req, res, next) {
    try{
        res.json(await language.getMultiple(req.query.page));
    }
    catch(err){
        console.error("Error" + err.message);
        next(err);
    }
});


module.exports = router;