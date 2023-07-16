"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { padTwoDigits } = require("../../utils/utils");
/**
 *
 * @param userName Username
 * @param month Month
 * @param day Day
 * @param year Year
 * @param upperLimit How many email addresses to generate
 * @param domain Email Address Domain
 * @param id Identifier of an email address, if it is to be used for a specific purpose (ie: 'test' or 'trial')
 * @returns
 */
const assembleEmail = function (userName, month, day, year, upperLimit, domain, id = "default") {
    const emailArr = [];
    for (let i = 1; i <= upperLimit; i++) {
        let emailStr = id === "default"
            ? `${userName}+${month}.${day}.${year}.${padTwoDigits(i)}@${domain}`
            : `${userName}+${id}${month}.${day}.${year}.${padTwoDigits(i)}@${domain}`;
        emailArr.push(emailStr);
    }
    console.log(`Emails Generated: `, emailArr);
    return emailArr;
};
const generateDate = function (date) {
    const thisMonth = padTwoDigits(date.getMonth() + 1);
    const todayDate = padTwoDigits(date.getDate());
    const thisYear = date.getFullYear().toString();
    return { thisMonth, todayDate, thisYear };
};
module.exports = {
    assembleEmail,
    generateDate,
};
