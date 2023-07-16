// const { assembleEmail } = require("./emailFunctions");
import { IUser } from "../../models/user";
const { assembleEmail, generateDate } = require("./emailFunctions");

const date: Date = new Date();
const { thisMonth, todayDate, thisYear } = generateDate(date);

const user: IUser = {
  userName: "brittpezzillo",
  emailDomain: "gmail.com",
  defaultPassword: "Testing1234!",
};

console.log(user);
console.log(thisMonth, todayDate, thisYear);

let email: string = assembleEmail(
  user.userName,
  thisMonth,
  todayDate,
  thisYear,
  5,
  user.emailDomain
);

console.log(typeof email);
