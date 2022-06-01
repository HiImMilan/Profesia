import React,  { useState } from "react";
import LoginForm from "../components/forms/loginForm";
import RegisterForm from "../components/forms/registerForm";



// switch between LoginForm and RegisterForm if in logininform user click on Create Account
// if in registerform user click on Login


export default function LoginRegisterPage() {
    const [loginRegisterSwitch, setloginRegisterSwitch] = useState(true);
    const togglePage = () => setloginRegisterSwitch(loginRegisterSwitch => !loginRegisterSwitch);

    return (
        <div className="App">
            <div class="loginpage-bgimg">
                {loginRegisterSwitch && <LoginForm onToggle={() => togglePage()} />}
                {!loginRegisterSwitch && <RegisterForm onToggle={() => togglePage()}/>}
            </div>
        </div>
    )
}

