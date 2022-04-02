

const webSocket = require('ws');
const wss = new webSocket.Server({port: 3000})

const connections = {};
const users = {};
const chats = {};


function getChat(a,b)
{
    const [x,y] = a < b ? [a, b] : [b, a]
    if (!(x in chats)) chats[x] = {}
    if (!(y in chats[x])) chats[x][y] = []
    return chats[x][y]
}


function sendMessage(sender, receiver, message) {  
    console.log("sender: " + sender + " receiver: " + receiver)
    const chat = getChat(sender,receiver)
    chat.push({message : message , sender : sender , receiver : receiver})
    console.log(chat)
}


wss.on('connection', (ws) => {

    const id = uuidv4()
    connections[id] = {connection : ws}

    ws.on('message', (textMessageIn) => {
        const obj = JSON.parse(textMessageIn)

        console.log(obj)

        if (obj.action === "login")
        {
            users[obj.name] = { name : obj.name , picture: obj.picture, connection : id }
            connections[id].user = obj.name
            updateUserList()
        }
        if (obj.action === "message")
        {
            if ("user" in connections[id])
            {
                console.log("before send")
                sendMessage(connections[id].user, obj.receiver, obj.message)
                updateUserList()
            }
        }

        // const textMessageOut = JSON.stringify(obj)
        // for (const id in clients) {
        //     clients[id].send(textMessageOut)
        // }    
    })

    ws.on('close', () => {
        if ("user" in connections[id]) // user was logged in but disconnected
        {
            delete users[connections[id].user]
        }
        delete connections[id]
        updateUserList()
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

function updateUserList() {
        for (const id in connections) {
            sendUserList(id)
        }
}

function sendUserList(id)
{
    if ("user" in connections[id])
    {
        const user = connections[id].user
        let userList = {}
        for (const u in users) if (u !== user) { 
            const messages = getChat(user, users[u].name).map( m => {
                    return { message : m.message , who : (user === m.sender ? "me" : "you")}
            })
            userList[u] = { name : users[u].name , picture: users[u].picture, messages : messages}
        }
        const textMessageOut = JSON.stringify(userList)
        console.log(userList)
        connections[id].connection.send(textMessageOut)
    }
    /*
    else
    {
        const userList = {}
        for (const u in users) {
             userList[u] =  { name : users[u].name, picture: users[u].picture, messages : []}
        }
        const textMessageOut = JSON.stringify(userList)
        console.log(userList)
        connections[id].connection.send(textMessageOut)
    }
    */
}