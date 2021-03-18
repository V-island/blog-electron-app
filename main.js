const { app, BrowserWindow } = require('electron')

//窗口配置程序运行窗口的大小
const windowConfig = {
  width:800,
  height:600
};

function createWindow () {s
  const win = new BrowserWindow(windowConfig)

  // win.loadFile('index.html')
  win.loadURL(`file://${__dirname}/index.html`);//在窗口内要展示的内容index.html 就是打包生成的index.html
  win.webContents.openDevTools();  //开启调试工具
  win.on('close',() => {
    //回收BrowserWindow对象
    win = null;
  });
  win.on('resize',() => {
    win.reload();
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})