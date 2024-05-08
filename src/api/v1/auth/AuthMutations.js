import TokenHandler from "../../../utils/TokenHandler";
import api from "../../config/api";

async function loginUser(email, password) {
  const result = await api.post("/auth/login", {
    email,
    password,
  });

  console.log("This is my response from login", result.data);
  const { user, tokens } = result.data;

  const accessToken = tokens.accessToken;
  TokenHandler.saveAcccessToken(accessToken);
  return { user };
}

async function signUpUser(email, password, name, imgUrl) {
  const result = await api.post("/auth/signup", {
    email: email,
    password: password,
    name: name,
    profileImgUrl: imgUrl,
  });
  const { user, tokens } = result.data;

  const accessToken = tokens.accessToken;
  TokenHandler.saveAcccessToken(accessToken);
  return { user };
}

export default { loginUser, signUpUser };
