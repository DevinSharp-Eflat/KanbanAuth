import axios from "axios";
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  const response = await axios({method: 'post', url: "/login",  data: {username: userInfo.username, password: userInfo.password}});
  return await response.data[0].json();
}



export { login };
