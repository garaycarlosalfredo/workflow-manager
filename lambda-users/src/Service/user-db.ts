import AWS from "aws-sdk";
const { REGION, TABLE_USERS, IS_LOCAL } = process.env;

const dynamoDB = new AWS.DynamoDB(
  IS_LOCAL === "localhost"
    ? {
        region: "localhost",
        endpoint: "http://localhost:8000",
      }
    : {
        region: REGION,
      }
);

const getItem = (params) => {
  try {
    return dynamoDB.getItem(params, (err, data) => {
      if (err) console.log(err);
      else console.log(data);
    });
  } catch (error) {
    console.log("on getItem", error);
  }
};

const saveItem = (params) => {
  return dynamoDB.putItem(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
};

export { getItem, saveItem };
