import axios from "axios";

const baseURL = "https://travel.liara.run/api/v1";

export default axios.create({
  baseURL: baseURL,
});
