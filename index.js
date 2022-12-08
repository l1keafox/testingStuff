const numEventsPerDay = 8;
const secsPerEvents = 30;

const daySecs = numEventsPerDay * secsPerEvents;
console.log(daySecs,"Day of secs");
console.log(daySecs/60, "Minutes");

const monthDays = 30;
const monthSecs = daySecs * monthDays;
console.log(monthSecs,"Month in secs");
console.log(monthSecs/ (60), "a month in Minutes");
const yearMonths = 12;
const yearSecs = monthSecs * yearMonths;
console.log(yearSecs,"Years in secs" );
console.log(yearSecs/ (60), "a year in Minutes");
console.log((yearSecs/ (60))/60, "a year in Hours");
console.log( 24/((yearSecs/ (60))/60) ,"Number of years per Day" )
