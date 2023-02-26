const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  GOOGLE_SCOPES,
} = process.env;
import { eventGoogleApiCode, getOauth2IdToken } from "./utils/formatters";
const { google } = require("googleapis");
const jwtDecode = require("jwt-decode");
// (TODO) fix importations

export async function mediaLoginHandler(event, context) {
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
  );
  console.log("event: ", event);
  // const googleCode = eventGoogleApiCode(event);
  // const getOauth2ClientToken = await oauth2Client.getToken(googleCode);
  // const token = getOauth2IdToken(getOauth2ClientToken);
  // const decoded = jwtDecode(token);
  // const { email, email_verified, name, given_name, family_name } = decoded;
  return {
    statusCode: 200,
    body: JSON.stringify({
      //user: { email, email_verified, name, given_name, family_name },
      message: "hello world from authorizer is OK google",
    }),
  };
}
