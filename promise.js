// promise.js
// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function () {
//         if(Math.random() > 0.5) {
//             reject("Failed!"); // Yay! Everything went well!
//         } else {
//             resolve("Success!");
//         }
//     }, 250);
// });

// myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
// }).catch((reason) => {
//     console.log("Boo! " + reason);
// });


// let x = req.get(uri, (err, res, body) => {
//     if (!err && res.statusCode == 200) {
//         console.log("we're good");        
//     } else {
//         console.log("Something went wrong...\n" + err); 
//     }
// });


let req = require("request");            
let key = "ADOUOEB4TRXN6KA5";
let demo = "demo";
let uri = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=" + key;

let p = new Promise((resolve, reject) => {
    req.get(uri, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            resolve(body); // Successful responses are really long, so just first 500 for example
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
    // make AzureML Web Service call here with values
    console.log(vals);  
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

