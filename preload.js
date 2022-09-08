
var flag = true
function pin(clicked_id){
    const {ipcRenderer} = require('electron')
    const { BrowserWindow } = require('electron')
    console.log(clicked_id)

    
    let changeimg = document.getElementById("pin-img")
    changeimg.src = flag ? "./media/unpin.png" : "./media/pin.png";
    ipcRenderer.send('pin')
    
    flag = !flag

   
} 
    
global.onclick = pin

// onclick="pin(this.id)"