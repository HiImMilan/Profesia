import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import ToastPlaceholder from "../toast/ToastPlaceholder";
import { useToast } from "../toast/ToastContext";
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  function updateEmail(e) {
    setEmail(e.target.value);
  }
  function updatePassword(e) {
    setPassword(e.target.value);
  }
  function getFormData() {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    return formData;
  }
  async function submitForm(e) {
    e.preventDefault();
    // create formData
    const formData = getFormData();
    const URI = "http://127.0.0.1:8080/api/v1/";
    axios
      .post(URI + "authenticate", formData)
      .then((response) => {
        if (response.status == 200 && response.data.token != null) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        toast.addToast("Error", "Invalid username or password");
      });
  }
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/dashboard");
    }
  });

  return (
    <div class="flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow bg-black shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-40">
      <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Login To WORKA Account
      </div>
      <div class="flex gap-4 item-center">
        <button
          type="button"
          class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
          </svg>
          Log in with Google
        </button>
        {/* OAUTH2 pomocou springboot-oauth possibly?? keby nič kludne zmazať */}
      </div>
      <div class="mt-8">
        <form action="#" autoComplete="off">
          <div class="flex flex-col mb-2">
            <CssTextField
              type="email"
              id="email"
              label="Worka ID"
              variant="outlined"
              onChange={updateEmail}
            />
          </div>
          <div class="flex flex-col mb-6">
            <CssTextField
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              onChange={updatePassword}
            />
          </div>
          <div class="flex items-center mb-6 -mt-4">
            <div class="flex ml-auto">
              <a
                href="#"
                class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
              >
                Forgot Your Password?
              </a>
              <div class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                <span class="mx-2">|</span>
              </div>
              <a
                href="#"
                target="_blank"
                class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
              >
                Create Account?
              </a>
            </div>
          </div>
          <div class="flex w-full">
            <button
              type="submit"
              class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={submitForm}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="flex items-center justify-center mt-6"></div>

      <ToastPlaceholder></ToastPlaceholder>
    </div>
  );
}

export default LoginForm;
