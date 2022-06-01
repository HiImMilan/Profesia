import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import ToastPlaceholder from "../toast/ToastPlaceholder";
import { useToast } from "../toast/ToastContext";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Dialog from "@mui/material/Dialog";
import ResetPassword from "./ResetPassword";
import UploadFileForm from "./uploadFileForm";
import { Alert } from "@mui/material";



const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
};

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white",
    },
    "& label": {
        color: "white",
    },
    "& input": {
        color: "white",
    },

    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: "white",
        },
        "&.Mui-focused fieldset": {
            borderColor: "white",
        },
    },
});

function RegisterForm(props) {
    const { onToggle } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [getresetPassword, setResetPassword] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    function updateEmail(e) {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function updateName(e) {
        setName(e.target.value);
    }

    function resetPassword(e) {
        e.preventDefault();
        setResetPassword(true);
    }

    function getFormData() {
        const formRegisterData = new FormData();
        formRegisterData.append("username", email);
        formRegisterData.append("password", password);
        formRegisterData.append("name", name);
        formRegisterData.append("url", url);
        console.log(formRegisterData);
        return formRegisterData;
    }

    function close() {
        setResetPassword(!getresetPassword);
    }



    async function submitForm() {
        const formData = getFormData();
        // console.log(formData);
        const URI = "http://127.0.0.1:8080/api/users/registerUser";
        axios
            .post(URI, formData, config)
            .then((response) => {
                if (response.status == 200) {
                    navigate("/login");
                }
            })
            .catch((error) => {
                toast.addToast("Failed", "Unknown error: " + error);
            });
    }


    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            navigate("/dashboard");
        }
    });



    return (
        <div class="flex flex-col w-full max-w-3xl px-4 py-8 rounded-lg shadow bg-black shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-40">
            <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Register to WORKA Account
            </div>
            <div class="flex gap-4 item-center">
            </div>
            <div class="mt-8">

                <div class="flex flex-col mb-2">
                    <CssTextField
                        type="email"
                        id="email"
                        label="Enter your email"
                        variant="outlined"
                        required
                        onChange={updateEmail}
                    />
                </div>
                <div class="flex flex-col mb-2">
                    <CssTextField
                        type="text"
                        id="realname"
                        label="Real Name"
                        variant="outlined"
                        required
                        onChange={updateName}
                    />
                </div>
                <div class="flex flex-col mb-6">
                    <CssTextField
                        type="password"
                        id="password"
                        label="Password"
                        variant="outlined"
                        required
                        onChange={updatePassword}
                    />

                    <div class="mt-2">
                        <p class="inline-flex text-xs font-thin text-gray-500 mb-2 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"> Upload profile picture</p>
                        <UploadFileForm fileUrl={(e) => setUrl(e)} />

                    </div>
                </div>

                <div class="flex items-center mb-6 -mt-4">
                    <div class="flex ml-auto">
                        <button
                            type="button"
                            href="password-reset"
                            class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                            onClick={resetPassword}
                        >
                            Forgot Your Password?
                        </button>
                        <Dialog open={getresetPassword}>
                            <ResetPassword email={email} close={close}></ResetPassword>
                        </Dialog>
                        <div class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                            <span class="mx-2">|</span>
                        </div>
                        <button
                            onClick={onToggle}
                            target="_blank"
                            class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
                        >
                            Already have account?
                        </button>
                    </div>


                </div>
                <div class="flex w-full">
                    <button
                        autofocus
                        type="submit"
                        class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        onClick={submitForm}
                    >
                        Register
                    </button>
                </div>
            </div>

            <div class="flex items-center justify-center mt-6"></div>

            <ToastPlaceholder></ToastPlaceholder>
        </div>

    );
}

export default RegisterForm;
