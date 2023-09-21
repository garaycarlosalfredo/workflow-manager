import { omit } from "ramda";
const jwt = require("jsonwebtoken");
const secretKey = "tu_clave_secreta"; // (TODO) use env
const algorithmUsed = "HS256"; // (TODO) use env

const payloadFormatter = omit(["password"]);

const createToken = (payload) => {
  return jwt.sign(payloadFormatter(payload), secretKey, {
    expiresIn: "1m",
    algorithm: algorithmUsed,
  });
};

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey, {
      algorithms: [algorithmUsed],
    });
    console.log("[decoded?]" + decoded);
    return decoded;
  } catch (error) {
    // Aquí puedes manejar el error de token no válido
    throw new Error("Token no válido");
  }
}

export { createToken, verifyToken };
