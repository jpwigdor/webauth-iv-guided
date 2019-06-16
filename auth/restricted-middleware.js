const jwt = require("jsonwebtoken");

const tokenService = require("./token-service");

module.exports = (req, res, next) => {
  const token = tokenService.verifyToken(req.headers.authorization);

  console.log("token", token);
  if (token) {
    req.decodedJwt = token;
    next();
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};
