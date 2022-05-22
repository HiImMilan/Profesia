import { axios } from "axios";

const URI = "http://127.0.0.1:8080/api/v1/";
async function login(e) {
  const response = await axios.post(URI + "authenticate", formData);
  console.log(response);
  if (response.status == 200) {
    localStorage.setItem("token", response.data.token);
  } else {
    console.log("error");
  }
}

function LoginForm() {
    const navigate = useNavigate();
    function validateToken() {
      const token = localStorage.getItem("token");
      const data = new FormData();
      data.append("token", token);
      axios.post(URI + "validate", data).then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("test");
          navigate("/dashboard");
        } else {
          localStorage.removeItem("token");
        }
      });
    }