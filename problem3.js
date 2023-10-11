/**
  Given a time in -hour AM/PM format, convert it to military (24-hour) time.
  Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
  12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

  Example 07:05:45PM --> 19:05:45
 */

/**
 * Pseudo code:
 * First we will check if the time is in PM or AM
 *
 *    1. split the string using : as a delimiter
 *    2. check t[0] > 12 and is PM
 *          - t[0] = 12 + t[0] --> ex: 7 + 12 --> 19
 *          - Remove PM from last element
 *          - join the array in one string
 *
 *    3. check t[0] not > 12 than it is AM
 *        - join the array in one string
 *        - Remove AM from last element
 *
 * return result
 */

// Cases
const time = "07:40:22PM";
const time2 = "00:40:22AM";
const time3 = "12:40:22PM";
const time4 = "12:45:54PM";
const time5 = "06:40:03AM";

const convertTimeTo24Hour = (t) => {
  const splitTime = t.split(":");
  const hour = parseInt(splitTime[0]);
  const minutes = splitTime[1];
  const secondswithAMPM = splitTime[2];

  const AMPM = secondswithAMPM.slice(-2);
  const seconds = secondswithAMPM.slice(0, -2);

  const isPM = AMPM === "PM";

  let hourIn24Format;
  let convertedTime;

  hour < 12 && isPM && (hourIn24Format = hour + 12);

  // padStart works with strings only, so convert the number to text first
  hour < 12 && !isPM && (hourIn24Format = hour.toString().padStart(2, "0"));

  hour === 12 && !isPM && (hourIn24Format = "00");

  hour === 12 && isPM && (hourIn24Format = "12");

  convertedTime = `${hourIn24Format}:${minutes}:${seconds}`;

  return convertedTime;
};

console.log(convertTimeTo24Hour(time5));
