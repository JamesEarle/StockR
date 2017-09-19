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
let uri = "https://www.alphavantage.co/que?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=" + key;

let p = new Promise((resolve, reject) => {
    req.get(uri, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            resolve(body.substring(0, 500)); // Successful responses are really long, so just first 500 for example
        } else {
            reject(res.statusCode)
        }
    }); 
});



p.then(result => { 
    console.log(result); 
}).catch(err => {
    console.log(err);
});

