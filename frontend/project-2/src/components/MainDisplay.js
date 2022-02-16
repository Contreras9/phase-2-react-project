import react from "react";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function MainDisplay({send, users}) {
    return (
    <div className="right">
    <Switch>
    <Route path="/chat/:name" children={<Chat send={send} users={users}/>} />
    <Route path="/">
      <Login 
        send={send}
      />
    </Route>
    </Switch>
    </div>
    )
}

export default MainDisplay;