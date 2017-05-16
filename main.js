"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var speak_1 = require("./speak");
var win;
var createWindow = function () {
    win = new electron_1.BrowserWindow({ width: 400, height: 400 });
    win.loadURL("file://" + __dirname + "/index.html");
    // Imports are fine.
    var x = new speak_1.Speak().say("words");
    win.on("closed", function () {
        win = null;
    });
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (win === null)
        createWindow();
});
