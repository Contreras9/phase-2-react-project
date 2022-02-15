const webSocket = require('ws');
const wss = new webSocket.Server({port: 7000})
const clients = {};
wss.on('connection', (ws) => {
    const id = uuidv4()
    clients[id] = ws

    ws.on('message', (textMessageIn) => {
        const obj = JSON.parse(textMessageIn)
        
        console.log(obj)

        const textMessageOut = JSON.stringify(obj)
        for (const id in clients) {
            clients[id].send(textMessageOut)
        }    
    })

    ws.on('onClose', () => {
        delete clients[id]
    })
})

function uuidv4(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}