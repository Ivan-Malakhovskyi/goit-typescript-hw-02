/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfTheWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: DayOfTheWeek): boolean => {
  switch (day) {
    case DayOfTheWeek.Saturday:
    case DayOfTheWeek.Sunday:
      return true;

    default:
      return false;
  }
};

console.log(isWeekend(DayOfTheWeek.Saturday));
