import axios from "axios";
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  const response = await axios.post("/login", { username: userInfo.username, password: userInfo.password});
  return await response.data.json();
}



export { login };
