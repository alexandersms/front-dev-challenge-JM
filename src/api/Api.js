import axios from "axios";

const PROXY = "https://cors-anywhere.herokuapp.com/"

const Api = axios.create({
  baseURL: `${PROXY}https://skincare-api.herokuapp.com/`
});

export default Api;