var https = require("https");

var options = {
  host: 'www.example.org',
  path: '/.'
};

// called by the https when the request is made.
var callback = function(response) {
  console.log('In response to handler callback!');
  console.log('Resonse: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");
