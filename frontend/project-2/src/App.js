import './App.css';
import react, {useEffect, useState} from 'react';
import UserList from './components/UserList';
import MainDisplay from './components/MainDisplay';


function App() {

  const [users, setUsers] = useState({})
  const [send, setsend] = useState()
//   const users = {"bob" : {name : "bob"}}

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:7000/ws")

    socket.onopen = () => {
      const sendFunc = obj => {
        socket.send(JSON.stringify(obj))
      }
      
    setsend({send : sendFunc})
    console.log("sentfunc")
    }

    socket.onmessage = (event) => {
      const obj = JSON.parse(event.data)
      setUsers(obj)
      // if (obj.action === "join")
      // {
      //   setUsers(users => {
      //     users[obj.user.name] = obj.user
      //     return users
      //   })
      // } else if (obj.action === "leave") {
      //   setUsers(users => {
      //     delete users[obj.user.name]
      //     return users
      //   })
      // }
    }
console.log('started')
    socket.onclose = () => {

    }
  }, [])



  return (
    <div className="wrapper">
      <div className="container">
      <UserList
        users={Object.values(users)}
      />
        <MainDisplay 
            send={send}
            users={users}
        />
    </div>
    </div>
  );
}

export default App;
