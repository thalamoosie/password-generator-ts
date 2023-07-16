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

const assembleEmail = function (
  userName: string,
  month: string,
  day: string,
  year: string,
  upperLimit: number,
  domain: string,
  id: string = "default"
) {
  const emailArr: string[] = [];
  for (let i = 1; i <= upperLimit; i++) {
    let emailStr: string =
      id === "default"
        ? `${userName}+${month}.${day}.${year}.${padTwoDigits(i)}@${domain}`
        : `${userName}+${id}${month}.${day}.${year}.${padTwoDigits(
            i
          )}@${domain}`;
    emailArr.push(emailStr);
  }
  console.log(`Emails Generated: `, emailArr);
  return emailArr;
};

const generateDate = function (date: Date) {
  const thisMonth = padTwoDigits(date.getMonth() + 1);
  const todayDate = padTwoDigits(date.getDate());
  const thisYear = date.getFullYear().toString();
  return { thisMonth, todayDate, thisYear };
};

module.exports = {
  assembleEmail,
  generateDate,
};
