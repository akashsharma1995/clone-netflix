// Takes tailwind theme's width (Eg - 768px) & returns number without px.
export const getWidthInNumber = (width) => {
  return Number(width.slice(0, width.length - 2));
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Takes month number as input & return month name.
export const getMonthName = (monthNumber) => {
  return months[Number(monthNumber) - 1];
};

// Takes date string in format(yyyy-mm-dd) as input & returns dd monthName yyyy format. Ex - 1 Oct 2023.
export const formattedDate = (dateStr) => {
  if (!dateStr) return "";
  const arr = dateStr.split("-");
  return `${arr[2]} ${getMonthName(arr[1])} ${arr[0]}`;
};