var express = require('express');

//create our app
var app = express(); // call express lib as a function passing nothing as argument
const PORT = process.env.PORT || 3000;

// below function is redirect https traffic to http because openweatherapp api is preplanned and supports only http traffic
// req might be index.html or bundle.js
// req.headers['x-forwarded-proto'] this doesn't exist locally
// app.use(function(req, res, next) {
//     if (req.headers['x-forwarded-proto'] === 'http'){
//         next();
//     } else {
//         // always run locally, when it runs it strip offs our localhost port
//         res.redirect('http://'+ req.hostname + req.url);
//     }
// });
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://'+ req.hostname + req.url);
    } else {
        // always run locally, when it runs it strip offs our localhost port
        next();
    }
});
//app.use let us add functionality to our express application
//express.static is used to specify the folder name that we wanna expose to the web server
app.use(express.static('public'));
// app.listen(to start the server) takes 2 args, port and the function which will be called when the server is up.
app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});

// start in package.json is to tell heroku where to start from
// We are only using port 3000, but heroku will tell us which port
// we should be binding to using an environment variable.
