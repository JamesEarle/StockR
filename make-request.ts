import * as request from 'request';

var key = "ADOUOEB4TRXN6KA5"
var uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=";

request.get(uri + key, (err, res, body) => {
    if(!err && res.statusCode == 200) {
        console.log(body);
    }
});
