const jwt = require("jsonwebtoken"); // installed this library

const secrets = require("../config/secrets.js");

module.exports = {
  generateToken,
  verifyToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ["Student"]
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

function verifyToken(token) {
  return jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      // if token is invalid
      return false;
    } else {
      //if token is valid
      return decodedToken;
    }
  });
}
