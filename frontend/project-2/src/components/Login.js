import React from "react";

function Login({send}) {
    
    function submitHandler(event) {
        event.preventDefault()
        let reader = new FileReader()
        reader.readAsDataURL(event.target[1].files[0])
        reader.addEventListener('load', () => {
        console.log("Picture in login")
        console.log(event.target[1].files[0])
        send.send({action: "login", name: event.target[0].value, picture: reader.result})
        })
    }
    return (
        <div className="login-page">
  <div className="form">
    <form className="login-form" onSubmit={submitHandler}>
      <input type="text" placeholder="username"/>
      <input type="file" placeholder="Profile Photo"/>
      <button>login</button>
      <p className="message">Not registered? <a href="/">Create an account</a></p>
    </form>
  </div>
</div>
    )
}

export default Login;