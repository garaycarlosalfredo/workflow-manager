const { GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET,
GOOGLE_REDIRECT_URL,
GOOGLE_SCOPES} = process.env;
import { eventGoogleApiCode, getOauth2IdToken } from "./utils/formatters";
const { google } = require("googleapis"); 
const jwtDecode = require("jwt-decode");
// (TODO) fix importations

export async function urlGeneratorHandler(event, context) {
  const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URL
  );
  if (event?.rawPath === "/getMediaUrlAuthentication") {
    // generate a url that asks permissions for Blogger and Google Calendar scopes
    // const scopes = [
    //   //"https://www.googleapis.com/auth/blogger",
    //   //"https://www.googleapis.com/auth/calendar",
    //   "https://www.googleapis.com/auth/userinfo.email",
    //   "https://www.googleapis.com/auth/userinfo.profile",
    //   "https://www.googleapis.com/auth/user.birthday.read",
    //   "https://www.googleapis.com/auth/user.phonenumbers.read",
    //   //"https://www.googleapis.com/auth/classroom.profile.photos" // if I want obtain the profile photo
    // ];

    const scopes = GOOGLE_SCOPES.split(';')

    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: "offline",

      // If you only need one scope you can pass it as a string
      scope: scopes,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        event,
        url,
        message: "hello world from authorizer",
      }),
    };
  } else {
    console.log("event: ", event);
    const googleCode = eventGoogleApiCode(event);
    const getOauth2ClientToken = await oauth2Client.getToken(googleCode);
    const token = getOauth2IdToken(getOauth2ClientToken);
    const decoded = jwtDecode(token);
    const { email, email_verified, name, given_name, family_name } = decoded;
    return {
      statusCode: 200,
      body: JSON.stringify({
        user: { email, email_verified, name, given_name, family_name},
        message: "hello world from authorizer is OK google",
      }),
    };
  }
}
