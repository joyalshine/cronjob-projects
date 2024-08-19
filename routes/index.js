var express = require('express');
var router = express.Router();
const cron = require('node-cron')
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ Status: 'Server is Running' });
});

const cronCall = () => {
  axios
  .get("https://resumit-combined.onrender.com/cronjob")
  .then(function (response) {
    console.log(response.data);
  });
}

cron.schedule('*/4 * * * *', cronCall)

module.exports = router;
