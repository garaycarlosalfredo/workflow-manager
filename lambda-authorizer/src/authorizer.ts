export async function authorizerHandler(event, context) {
  console.info("context", context);
  return {
    event,
    message: "Go Serverless v3! Your function executed successfully! authorizer",
  };
}
