import * as request from 'request';

let key = "ADOUOEB4TRXN6KA5";

export function submit() {
    let symbol = (document.getElementById('add-symbol') as HTMLInputElement).value;
    let func = (document.getElementById('function') as HTMLSelectElement).value;

    // todo: allow for CSV download
    let uri = "https://www.alphavantage.co/query?function=" + func + "&symbol=" + symbol + "&apikey=" + key;

    let p = new Promise((resolve, reject) => {
        request.get(uri, (err, res, body) => {
            if(!err && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(err);
            }
        });
    });
    
    p.then(result => {
        appendToDom(result);
    }).catch(error => {
        throw error;
    });
}

function appendToDom(arg) {
    let body = document.getElementsByTagName('body').item(0);
    
    let p = document.createElement("p");
    p.innerText = arg;

    body.appendChild(p);
}