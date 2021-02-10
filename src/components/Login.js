import React, {useState} from "react";

const Login = (setUser, isAuth) => {

const [user, setUser] = useState("");
const [pass, setPass] = useState("");

const formHandler = async(e) => {
e.preventDefault();
}

const res = await fetch(`http://localhost:5000/${endpointhere}`, {//need path
    method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
        username: user,
        password: pass
    })
});

const data = await res.json();
setUser(data.user);
localStorage.setItem("authenticationToken", data.token);
setIsAuth(true);


return (
    <form onSubmit={formHandler}>
        <input type="text" placeholder="username" onchange={(e)=> setUser(e.target.value) } />
        <input type="text" placeholder="password" onchange={(e)=> setPass(e.target.value) } />
    </form>
)
//note Login has not been added to app.js yet
}

export default Login;