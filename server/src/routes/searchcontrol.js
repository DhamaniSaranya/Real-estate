const router = require('express').Router();
const Property = require('../models/property');

router.get('/search/:key', async (req, res) => {
    try {
      let result = await Property.find({
          "$or":[
              {_id:{$regex: req.params.key}}
          ]
      });
      console.log(key)
      res.json(result);
      // res.json(post);
    } catch(e) {
      console.log(e)
    }
});

module.exports = router;