"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { assembleEmail, generateDate } = require("./emailFunctions");
const date = new Date();
const { thisMonth, todayDate, thisYear } = generateDate(date);
const user = {
    userName: "mm00sie",
    emailDomain: "big.moose",
    defaultPassword: "TestingPW!",
};
console.log(user);
console.log(thisMonth, todayDate, thisYear);
let email = assembleEmail(user.userName, thisMonth, todayDate, thisYear, 5, user.emailDomain);
console.log(typeof email);
