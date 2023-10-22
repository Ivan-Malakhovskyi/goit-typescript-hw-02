/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfTheWeek {
  Day = 5,
}

const isWeekend = (day: DayOfTheWeek): number => {
  console.log(day);
  return 10;
};

isWeekend(DayOfTheWeek.Day);
