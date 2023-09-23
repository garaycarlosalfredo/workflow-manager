import { omit } from "ramda";
const jwt = require("jsonwebtoken");

const createToken = (config, payload: object) => {
  return jwt.sign(payload, config.secretKey, {
    expiresIn: "5m",
    algorithm: config.algorithm,
  });
};

function verifyToken(config, token) {
  try {
    const decoded = jwt.verify(token, config.secretKey, {
      algorithms: [config.algorithm],
    });
    console.log("[decoded?]" + decoded);
    return decoded;
  } catch (error) {
    // Aquí puedes manejar el error de token no válido
    throw new Error("Token no válido");
  }
}

export { createToken, verifyToken };
