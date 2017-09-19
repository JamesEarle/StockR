"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class Request {
    // fix this constructor to pass param to makeRequest
    constructor(symbol) {
        this.key = "ADOUOEB4TRXN6KA5";
        this.sym = symbol;
        this.uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.sym + "&interval=1min&apikey=" + this.key;
    }
    makeRequest() {
        let result;
        if (this.uri) {
            console.log(this.uri);
            request.get(this.uri, (err, res, body) => {
                if (!err && res.statusCode == 200) {
                    this.res = body;
                }
                else {
                    this.res = "Something went wrong...\n" + err;
                }
            });
            return this.res;
        }
        else {
            return null;
        }
    }
}
exports.Request = Request;
