"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const fs = require("file-system");
let key = "ADOUOEB4TRXN6KA5";
function submit() {
    let symbol = document.getElementById('add-symbol').value.toUpperCase();
    let func = document.getElementById('function').value;
    let datatype = document.getElementById('data-type').value;
    let uri = "https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&apikey=" + key + "&datatype=" + datatype;
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
        if (datatype === "json") {
            appendToDom(result);
        }
        else {
            let fileName = "downloads/" + symbol + "_" + func + "_" + Date.now() + ".csv";
            fs.writeFile(fileName, result);
            console.log("File Written: " + fileName);
        }
    }).catch(error => {
        throw error;
    });
}
exports.submit = submit;
function appendToDom(arg) {
    let body = document.getElementsByTagName('body').item(0);
    let p = document.createElement("p");
    p.innerText = arg;
    body.appendChild(p);
}
