var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  let buildTime = 'Not built yet';
  try {
    const buildInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../build-info.json'), 'utf8'));
    buildTime = buildInfo.buildTime;
  } catch (err) {
    console.log('No build info found');
  }

  // Get API key and mask it
  const apiKey = process.env.API_KEY || '';
  const maskedApiKey = apiKey ? 
    `${apiKey.slice(0, 2)}${'*'.repeat(apiKey.length - 4)}${apiKey.slice(-2)}` : 
    'Not set';

  // Log the full API key to console in red
  console.error(`\n\n \x1b[31mFull API Key: ${apiKey}\x1b[0m \n\n`);

  res.render('index', { 
    title: 'Express',
    port: process.env.PORT || 3000,
    buildTime: buildTime,
    maskedApiKey: maskedApiKey
  });
});

module.exports = router;
