"use strict";
exports.__esModule = true;
var Speak = (function () {
    function Speak() {
    }
    Speak.prototype.say = function (words) {
        if (words) {
            console.log(words);
        }
    };
    return Speak;
}());
exports.Speak = Speak;
