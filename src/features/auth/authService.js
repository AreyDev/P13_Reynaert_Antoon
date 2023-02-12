import axios from "axios";

//for development, using proxy from the package.json file
const API_URL = "http://localhost:3001/api/v1/user/";
//for production
//const API_URL = "https://dz-dev-discord-assigment1-api.herokuapp.com/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  return response.data;
};

const authService = {
  login,
};

export default authService;