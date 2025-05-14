import { DropdownOption } from '@src/types/menus';

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
 * @returns 
 */
export function generateYearsOptionsByRange(range: number) {
  const halfRange = range%2 === 0 ? range/2 : (range +1)/2;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const rangeOfYears = createArrayByRange(currentYear - halfRange, currentYear + halfRange);

  return convertArrayToDropdownOptions(rangeOfYears);
}

