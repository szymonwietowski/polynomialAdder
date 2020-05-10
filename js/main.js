const {app, BrowserWindow, Menu} = require('electron')

// SET ENV
process.env.NODE_ENV = 'dev';

function createMianWindow() {

    const mainWindow = new BrowserWindow({
        webPreferences: {
            width: 800,
            height: 800,
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('./html/main.html');

    let menuTemplate = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(menuTemplate);
}

app.whenReady().then(createMianWindow);

const mainMenuTemplate =  [
    {
      label: 'Plik',
      submenu:[
        {
          label: 'Zamknij',
          accelerator: 'Ctrl+Q',
          click(){
            app.quit();
          }
        }
      ]
    }
  ];

  if(process.env.NODE_ENV == 'dev'){
    mainMenuTemplate.push({
      label: 'Developer Tools',
      submenu:[
        {
          role: 'reload'
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Ctrl+I',
          click(item, focusedWindow){
            focusedWindow.toggleDevTools();
          }
        }
      ]
    });
  }