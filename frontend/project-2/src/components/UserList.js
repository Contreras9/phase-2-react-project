import react from "react";
import User from "./User";

function UserList({users}) {
    return (
        <div className="left">
        <div className="top">
                <input type="text" placeholder="Search" />
                <a href="javascript:;" className="search"></a>
            </div>
            <ul className="people">
                    {users.map(user => {
                        return (
                            <User
                            key={user.key}
                            name={user.name}
                            />
                        )
                    })}
            </ul>
        </div>
    )
}

export default UserList;