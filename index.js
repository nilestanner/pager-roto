const fs  = require('fs');
const moment = require('moment');
const argv = require('minimist')(process.argv.slice(2));
const people = fs.readFileSync(__dirname + '/people.txt', 'utf8').split('\n');

const getOnPager = (date) => {
    date = moment(date);
    const week = date.diff('2018-01-01', 'weeks');
    return people[week % people.length];
}
const day = argv.date || argv.d || new Date();
const currentDate = moment(day,'YYYY-MM-DD');
const currentPager = getOnPager(currentDate);
const nextPager = getOnPager(currentDate.add(1, 'week'));

console.log(`For date ${currentDate.format('MMM, DD, YYYY')}`);
console.log(`Current on pager: ${currentPager}`);
console.log(`Next on pager: ${nextPager}`);
