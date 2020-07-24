export const getMonthFromDate = (date) => {
  return new Date(date).getMonth() + 1;
};

export const usersByMonth = (arr = [], month = 0) => {
  let usersByMonthCount = 0;
  arr.map((user) => {
    if (month === getMonthFromDate(user.dob)) {
      return usersByMonthCount++;
    }
    return usersByMonthCount;
  });
  return usersByMonthCount;
};
