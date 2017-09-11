// import * as req from '../modules/Request';

import * as request from 'request';

let key = "ADOUOEB4TRXN6KA5";

export function submit() {
    let symbol = (document.getElementById('add-symbol') as HTMLInputElement).value;
    let uri = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=1min&apikey=" + key;

    let x = request.get(uri, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            callback(body);
        } else {
            return "Something went wrong...\n" + err; 
        }
    });
}

function callback(arg) {
    let body = document.getElementsByTagName('body').item(0);
    
    let p = document.createElement("p");
    p.innerText = arg;

    body.appendChild(p);
}