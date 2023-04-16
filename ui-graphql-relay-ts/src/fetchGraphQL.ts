import Cookies from "js-cookie";
// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  //const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  //Cookies.set("auth_token", "my_token", { expires: yarn s1 / 24 }); // To test cookie
  const authToken = Cookies.get("auth_token");
  const headers = {
    //    Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
    Authorization: `bearer ${authToken}`,
    "Content-Type": "application/json",
  };
  // Fetch data from GitHub's GraphQL API:
  //const response = await fetch('https://api.github.com/graphql', {
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
