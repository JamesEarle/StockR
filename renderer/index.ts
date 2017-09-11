import * as req from '../modules/Request';

export function submit() {
    let input = (document.getElementById('add-symbol') as HTMLInputElement).value;
    
    let myRequest = new req.Request(input);

    myRequest.makeRequest();
}