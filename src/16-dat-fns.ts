import {subDays, format} from 'date-fns';

const date = new Date(1993, 2, 23);

const result = subDays(date, 28);
const newDate = format(result, 'dd-MM-yyyy');
console.log(newDate);
