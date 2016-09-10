var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'localhost',
  path: '/new/public',
  //since we are listening on a custom port, we need to specify it by hand
  port: '6969',
  //This is what changes the request to a POST request
  method: 'GET',
  headers: {"uid": "keke", "roomid" : "custom"}
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
options.path = "/debug/rooms";
http.request(options, callback).end();
//This is the data we are posting, it needs to be a string or a buffer
