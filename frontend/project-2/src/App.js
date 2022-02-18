import './App.css';
import React, {useEffect, useState} from 'react';
import { Route, Switch, useHistory} from "react-router-dom";
import MainDisplay from './components/MainDisplay';
import Login from "./components/Login";


function App() {

  const [users, setUsers] = useState({})
  const [send, setsend] = useState()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const history = useHistory()

  useEffect( () => {
    console.log("history changed")
    history.push(isLoggedIn ? "/chat" : "/")
  }, [isLoggedIn])
  

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000/ws")

    socket.onopen = () => {
      setsend({send : (obj => socket.send(JSON.stringify(obj)))})
    }

    socket.onmessage = (event) => {
      setUsers(JSON.parse(event.data))
      setIsLoggedIn(true)
    }
    
    socket.onclose = () => {
      setIsLoggedIn(false)
    }
  }, [])



  return (
    <div className="wrapper">
      <Switch> 
        <Route path="/chat">
        <MainDisplay 
          send={send}
          users={users}
        />
       </Route>
        <Route path="/">
        <Login 
          send={send}
        />
        </Route>
      </Switch>
    </div>
  );
}

export default App;