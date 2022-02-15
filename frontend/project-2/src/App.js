import './App.css';
import { useEffect, useState } from 'react/cjs/react.production.min';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState({})
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
      setUsers(obj.users)
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

    socket.onclose = () => {

    }
  }, [])



  return (
    <div className="wrapper">
      <div className="container">
      <UserList
        users={Object.values(users)}
      />
        {/* <div className="right">
            <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
            <div className="chat" data-chat="person1">
                <div className="conversation-start">
                    <span>Today, 6:48 AM</span>
                </div>
                <div className="bubble you">
                    Hello,
                </div>
                <div className="bubble you">
                    it's me.
                </div>
                <div className="bubble you">
                    I was wondering...
                </div>
            </div>
            <div className="chat" data-chat="person2">
                <div className="conversation-start">
                    <span>Today, 5:38 PM</span>
                </div>
                <div className="bubble you">
                    Hello, can you hear me?
                </div>
                <div className="bubble you">
                    I'm in California dreaming
                </div>
                <div className="bubble me">
                    ... about who we used to be.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    When we were younger and free...
                </div>
                <div className="bubble you">
                    I've forgotten how it felt before
                </div>
            </div>
            <div className="chat" data-chat="person3">
                <div className="conversation-start">
                    <span>Today, 3:38 AM</span>
                </div>
                <div className="bubble you">
                    Hey human!
                </div>
                <div className="bubble you">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble me">
                    ... what.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    I mean...
                </div>
                <div className="bubble you">
                    It’s not that bad...
                </div>
                <div className="bubble you">
                    But we’re probably gonna need a new carpet.
                </div>
            </div>
            <div className="chat" data-chat="person4">
                <div className="conversation-start">
                    <span>Yesterday, 4:20 PM</span>
                </div>
                <div className="bubble me">
                    Hey human!
                </div>
                <div className="bubble me">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble you">
                    ... what.
                </div>
                <div className="bubble you">
                    Are you serious?
                </div>
                <div className="bubble me">
                    I mean...
                </div>
                <div className="bubble me">
                    It’s not that bad...
                </div>
            </div>
            <div className="chat" data-chat="person5">
                <div className="conversation-start">
                    <span>Today, 6:28 AM</span>
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup for the third time like is <br />you blind bitch
                </div>

            </div>
            <div className="chat" data-chat="person6">
                <div className="conversation-start">
                    <span>Monday, 1:27 PM</span>
                </div>
                <div className="bubble you">
                    So, how's your new phone?
                </div>
                <div className="bubble you">
                    You finally have a smartphone :D
                </div>
                <div className="bubble me">
                    Drake?
                </div>
                <div className="bubble me">
                    Why aren't you answering?
                </div>
                <div className="bubble you">
                    howdoyoudoaspace
                </div>
            </div>
            <div className="write">
                <a href="javascript:;" className="write-link attach"></a>
                <input type="text" />
                <a href="javascript:;" className="write-link smiley"></a>
                <a href="javascript:;" className="write-link send"></a>
            </div>
        </div> */}
    </div>
</div>
  );
}

export default App;
