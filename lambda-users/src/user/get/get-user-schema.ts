import { object, string, date } from "yup";

let querySchema = object({
  numberId: string().required(),
});

let pathSchema = object({
  db: string().oneOf(["mongodb", "dynamodb"]),
});

export { querySchema, pathSchema };
