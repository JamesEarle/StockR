"use strict";
exports.__esModule = true;
var request = require("request");
var key = "ADOUOEB4TRXN6KA5";
var uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=";
request.get(uri + key, function (err, res, body) {
    if (!err && res.statusCode == 200) {
        console.log(body);
    }
});
// request(uri + key, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // Print the google web page.
//     }
// });
