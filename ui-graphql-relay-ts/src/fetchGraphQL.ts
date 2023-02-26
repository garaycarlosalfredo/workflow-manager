// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  //const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  const headers = {
    //    Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
    Authorization: `bearer ${new Date()}`,
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
