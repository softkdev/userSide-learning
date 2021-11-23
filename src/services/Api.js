import Axios from "axios";

let urls = {
  test: `https://learning-shid.iran.liara.run`,
  development: "https://learning-shid.iran.liara.run",
  production: "https://learning-shid.iran.liara.run",
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
