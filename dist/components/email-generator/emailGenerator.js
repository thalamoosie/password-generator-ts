"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { assembleEmail, generateDate } = require("./emailFunctions");
const date = new Date();
const { thisMonth, todayDate, thisYear } = generateDate(date);
const user = {
    userName: "brittpezzillo",
    emailDomain: "gmail.com",
    defaultPassword: "Testing1234!",
};
console.log(user);
console.log(thisMonth, todayDate, thisYear);
let email = assembleEmail(user.userName, thisMonth, todayDate, thisYear, 5, user.emailDomain);
console.log(typeof email);
