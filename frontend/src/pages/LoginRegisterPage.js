import React from "react";
import LoginForm from "../components/forms/loginForm"; 
import RegisterForm from "../components/forms/registerForm";


function LoginRegisterPage() {
    return (
        <div className="App">
            <div class="loginpage-bgimg">    
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginRegisterPage;