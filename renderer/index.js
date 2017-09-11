"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var req = require("../modules/Request");
function submit() {
    var input = document.getElementById('add-symbol').value;
    var myRequest = new req.Request(input);
    myRequest.makeRequest();
}
exports.submit = submit;
//# sourceMappingURL=index.js.map