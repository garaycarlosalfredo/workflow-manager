export async function userHandler(event, context) {
  console.info("context", context);
  return {
    message: "Go Serverless v3! Your function executed successfully!",
  };
}
