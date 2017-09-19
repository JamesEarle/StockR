"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
let key = "ADOUOEB4TRXN6KA5";
function submit() {
    let symbol = document.getElementById('add-symbol').value;
    let func = document.getElementById('function').value;
    // todo: allow for CSV download
    let uri = "https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&apikey=" + key;
    let p = new Promise((resolve, reject) => {
        request.get(uri, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                resolve(body);
            }
            else {
                reject(err);
            }
        });
    });
    p.then(result => {
        appendToDom(result);
    }).catch(error => {
        throw error;
    });
    // let x = request.get(uri, (err, res, body) => {
    //     if (!err && res.statusCode == 200) {
    //     } else {
    //         return "Something went wrong...\n" + err; 
    //     }
    // });
}
exports.submit = submit;
function appendToDom(arg) {
    let body = document.getElementsByTagName('body').item(0);
    let p = document.createElement("p");
    p.innerText = arg;
    body.appendChild(p);
}
