const { fetchHttp, promWithJs } = require("./utils");

const url = "https://api.cmsmanajer.com/v1/";

function login(data) {
  return promWithJs((resolve, reject) => {
    fetchHttp(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = {
  login,
};
