import React from "react";
import Chat from "./Chat";
import UserList from "./UserList"
import { Route, Switch } from "react-router-dom";

function MainDisplay({send, users}) {
  console.log("In maindisplay")
  console.log(users)
  return (
    <div className="container">
      <UserList
        users={Object.values(users)}
      />
      <div className="right">
      <Switch>
      <Route path="/chat/:name" children={ <Chat send={send} users={users} /> }
      />
      </Switch>
      </div>
    </div>
  )
}

export default MainDisplay;