import AWS from "aws-sdk";
import _ from "lodash";

import { fromPairs, compose, keys, head, values } from "ramda";

const { REGION, TABLE_USERS, IS_LOCAL } = process.env;

const dynamoDB = new AWS.DynamoDB.DocumentClient(
  IS_LOCAL === "localhost"
    ? {
        region: "localhost",
        endpoint: "http://localhost:8000",
      }
    : {
        region: REGION,
      }
);

const findUserByEmail = (data) => {
  const key = compose(head, keys)(data);
  const value = compose(head, values)(data);
  const KeyCamel = _.upperFirst(key);
  const params = {
    TableName: TABLE_USERS,
    IndexName: `${KeyCamel}Index`,
    KeyConditionExpression: `${key} = :${key}`,
    ExpressionAttributeValues: fromPairs([[`:${key}`, value]]),
  };
  try {
    return dynamoDB.query(params).promise();
  } catch (error) {
    console.log("on getUserById", error);
  }
};

const getUserById = (id) => {
  const params = {
    TableName: TABLE_USERS,
    Key: {
      userId: id,
    },
  };

  try {
    return dynamoDB.get(params).promise();
  } catch (error) {
    console.log("on getUserById", error);
  }
};

const addUser = async (user) => {
  const params = {
    TableName: TABLE_USERS,
    Item: user,
  };

  await dynamoDB.put(params).promise();
  return user;
};

export { getUserById, addUser, findUserByEmail };
