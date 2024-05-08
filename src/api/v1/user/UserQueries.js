import api from "../../config/api";

async function fetchCurrentUser() {
  const result = await api.get("/users/currentuser");

  console.log("RESULT from fetch current user req", result);

  return result.data;
}

export default { fetchCurrentUser };
