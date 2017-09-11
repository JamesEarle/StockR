import * as request from 'request';

export class Request {
    sym: string;
    uri: string;
    key: string = "ADOUOEB4TRXN6KA5";

    constructor(symbol: string) {
        this.sym = symbol;
        this.uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + this.sym + "&interval=1min&apikey=" + this.key;
    }

    makeRequest(): string {
        if(this.uri) {
            console.log(this.uri);
            request.get(this.uri, (err, res, body) => {
                if (!err && res.statusCode == 200) {
                    return body;
                }
            });
        } else {
            return null;
        }
    }
}
