"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var Request = (function () {
    function Request(symbol) {
        this.key = "ADOUOEB4TRXN6KA5";
        this.sym = symbol;
        this.uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.sym + "&interval=1min&apikey=" + this.key;
    }
    Request.prototype.makeRequest = function () {
        if (this.uri) {
            console.log(this.uri);
            request.get(this.uri, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    return body;
                }
            });
        }
        else {
            return null;
        }
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=Request.js.map