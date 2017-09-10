const { ipcRenderer } = require('electron')


document.getElementById('add-connection').addEventListener('click', () => {
    const BrowserWindow = remote.BrowserWindow;
    var win = new BrowserWindow({ width: 400, height: 200 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../symbol.html'),
        protocol: 'file:',
        slashes: true
    }));
});