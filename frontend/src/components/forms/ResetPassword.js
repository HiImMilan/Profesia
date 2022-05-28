import { react, useState } from "react";
import axios from "axios";
function ResetPassword(props) {
  const [email, setEmail] = useState(props.email);
  const toggle = props.close;
  async function resetPassword(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    await axios.post("http://127.0.0.1:8080/api/v1/reset-password", formData);
    toggle();
  }

  return (
    <div class="px-8 py-2 h-96 flex flex-col">
      <h1 class="text-3xl text-center my-8">Did you forget your password?</h1>
      <p class="w-10/12 text-center mx-auto">
        Enter your email adress and you will receive email with instructions
      </p>
      <form
        action="#"
        autoComplete="off"
        class="flex flex-col flex-grow justify-around"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          class="py-3 px-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={resetPassword}>Reset password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
