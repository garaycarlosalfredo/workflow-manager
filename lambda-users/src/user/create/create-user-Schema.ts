import { object, string, date } from "yup";

let userSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  personalId: string().required(),
  email: string().email().required(),
  phone: string().required(),
  password: string().required(),
  createDate: date().default(() => new Date()),
});

let pathSchema = object({
  db: string().oneOf(["mongodb"]),
});

export { userSchema, pathSchema };
