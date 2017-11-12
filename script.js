var apiKey = require('./auth.js').apiKey;
console.log("Hello world");
console.log(apiKey);

var googleMapsClient = require('@google/maps').createClient({
  key: apiKey
});

// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});