import react from "react";
import { useHistory } from "react-router-dom";

function Login({send}) {
    const history = useHistory()
    function submitHandler(event) {
        event.preventDefault()
        send.send({action: "login", name: event.target[0].value})
        history.push("/chat/tim")
    }


    return (
        <div className="login-page">
  <div className="form">
    <form className="login-form" onSubmit={submitHandler}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
    )
}

export default Login;