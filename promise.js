
let req = require("request");            
let key = "ADOUOEB4TRXN6KA5";
let demo = "demo";
let uri = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=" + key;

let p = new Promise((resolve, reject) => {
    req.get(uri, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            resolve(body);
        } else {
            reject(res.statusCode)
        }
    }); 
});

p.then(result => {
    result = JSON.parse(result);
    let vals = getTodaysValues(result);
    if(vals) {
        return vals;
    } else {
        console.log("Something went wrong.");
    }
}).then(vals => {
    const key = "YuXy3H77+GaZtnieqZDvaWND7cfuswO11nyRrKHi8cGfL6I0C3UaJvtQqSBcUBcKBTEwAcfNWtxsFX5RvTxcMQ==";
    const link = "https://ussouthcentral.services.azureml.net/subscriptions/b7f8d76ba14c463397b1285b301edeec/services/06be9653dda84eed93fa99397c5f637c/execute?api-version=2.0&format=swagger";
    const options = {
        uri: link,
        method: "GET",
        "Bearer": key
    }

    req(options, (err, res, body) => {
        console.log(err);
        console.log(res);
        console.log(body);
    });
    // console.log(vals);  
}).catch(err => {
    console.log(err);
});

function getTodaysValues(json) {
    result = json["Time Series (Daily)"];
    
    if(!result) return undefined;

    let date = new Date();
    let dayOfMonth = date.getDate().toString().length == 2 ? date.getDate() : "0" + date.getDate().toString();
    let month = date.getMonth().toString().length == 2 ? date.getMonth() : "0" + (date.getMonth() + 1).toString();
    let formattedDate = date.getFullYear() + "-" + month + "-" + dayOfMonth;

    let today = result[formattedDate];

    let obj = {
        "open"  : today["1. open"],
        "high"  : today["2. high"],
        "low"   : today["3. low"],
        "volume": today["5. volume"]
    }
    return obj;
}

