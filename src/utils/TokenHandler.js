function saveAcccessToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}

function getAccessToken() {
  const token = localStorage.getItem("accessToken");

  return token;
}

function deleteAccessToken() {
  localStorage.removeItem("accessToken");
}

export default { saveAcccessToken, getAccessToken, deleteAccessToken };
