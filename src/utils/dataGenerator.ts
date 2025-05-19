import { DropdownOption } from '@src/types/menus';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Create an array filled by the the range especified
 * @param start Range start
 * @param end Range end
 * @returns Array
 */
function createArrayByRange(start: number, end: number) {
  return Array.from({ length: (end - start) + 1 }, (_, index) => start + index);
}

/**
 * Creates an array of DropdownOptions based on an array
 * @param array Array to be converted
 * @returns Array of DropdownOptions
 */
function convertArrayToDropdownOptions(array: Array<any>) : DropdownOption[] {
  return array.map((option: any) => {
    return {
      label: option,
      value: option,
    };
  });
}

/**
 * Creates an array of DropdownOptions arround the current year 
 * @param range Range of years to be generated
 * @returns Array of DropdownOptions
 */
export function generateYearsOptionsByRange(range: number) {
  const halfRange = range%2 === 0 ? range/2 : (range +1)/2;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const rangeOfYears = createArrayByRange(currentYear - halfRange, currentYear + halfRange);

  return convertArrayToDropdownOptions(rangeOfYears);
}

/**
 * Creates an array os DropdownOptions with months 
 * @returns Array of DropdownOptions
 */
export function generateMonthsOptions(): DropdownOption[] {
  return convertArrayToDropdownOptions(monthNames);
}

/**
 * Converts month from number to string
 * @param number Number of the month
 * @returns string
 */
export function convertNumberToMonth(number: number) {
  return (monthNames[number]);
}

/**
 * Converts month from string to number
 * @param month Name of the month
 * @returns number
 */
export function convertMonthToDateFormat(month: string) {
  return monthNames.indexOf(month);
}

/**
 * Returns the number os days in a month based on month and year
 * @param month Month in any format
 * @param year Year
 * @returns number
 */
export function getDaysByMonthAndYear(month: number | string, year: number) {
  const numberedMonth = 
  typeof month === 'string' ? 
    convertMonthToDateFormat(month) : 
    month;
  return new Date(year, numberedMonth + 1, 0).getDate();
}

/**
 * Create array of options with each day of the month
 * @param month Month in any format
 * @param year Year
 * @returns Array of SelectDropdownOption
 */
export function generateDaysOptions(month: number | string, year: number) {
  const daysInMonth = getDaysByMonthAndYear(month, year);
  const arrayOfdays = createArrayByRange(1, daysInMonth);
  return convertArrayToDropdownOptions(arrayOfdays);
}

export function buildISODateString(hour: string, day: number,month: string, year: number,) {
  const date =  new Date(`${month} ${day}, ${year} ${hour}`);
  return date.toISOString();
}
