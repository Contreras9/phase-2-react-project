import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react/cjs/react.production.min';

function App() {

  const [state, setState] = useState({})
  const [send, setSend] = useState()

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:7000/ws")

    socket.onopen = () => {
      const sendFunc = obj => {
        socket.send(JSON.stringify(obj))
      }
      setSend(sendFunc)
    }

    socket.onmessage = (event) => {
      const obj = JSON.parse(event.data)
      if (obj.action === "new_chat_message")
      {
        setState(oldMessages => [...oldMessages,obj.message])
      }
    }

    socket.onclose = () => {

    }
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
