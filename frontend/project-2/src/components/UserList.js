import React, { useState } from "react";
import User from "./User";

function UserList({users}) {
    const [searchFilter, setSearchFilter] = useState("")
    console.log("In userlist")
    console.log(users)

    function handleChange(event) {
        setSearchFilter(event.target.value)
    }

    return (
        <div className="left">
          <div className="top">
            <input type="text" placeholder="Search" onChange={handleChange}/>
            {/* <a href="javascript:;" className="search"></a> */}
          </div>
            <ul className="people">
               {users.filter(user => user.name.toLowerCase().includes(searchFilter.toLowerCase())).map(user => {
                   return (
                      <User
                        key={user.id}
                        name={user.name}
                        messages={user.messages}
                        picture={user.picture}
                      />
                    )
                })}
            </ul>
        </div>
    )
}

export default UserList;