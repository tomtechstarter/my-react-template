import axios from "axios";

const api = axios.create({
  baseURL:
    "https://zzlaeeske3m7vjsfdxdrrrpg7q0rwirr.lambda-url.eu-central-1.on.aws/v1",
});

export default api;
