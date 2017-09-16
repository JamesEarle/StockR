"use strict";
// import * as req from '../modules/Request';
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var key = "ADOUOEB4TRXN6KA5";
function submit() {
    var symbol = document.getElementById('add-symbol').value;
    var func = document.getElementById('function').value;
    var uri = "https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&apikey=" + key;
    var x = request.get(uri, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            callback(body);
        }
        else {
            return "Something went wrong...\n" + err;
        }
    });
}
exports.submit = submit;
function callback(arg) {
    var body = document.getElementsByTagName('body').item(0);
    var p = document.createElement("p");
    p.innerText = arg;
    body.appendChild(p);
}
//# sourceMappingURL=index.js.map