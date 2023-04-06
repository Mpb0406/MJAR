// Get Date Method
export const getTrainingDate = (date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
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
  const weekDay = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayNum = date.getDate();
  const year = date.getFullYear();

  return `${weekDay} ${month} ${dayNum}, ${year}`;
};

// Conditionally Assign Class for Background Color on Badges for Set-Types
export const setTypeClass = (setType) => {
  switch (setType) {
    case "Warm-Up":
      return "input";
    case "Top Set":
      return "danger";
    case "Working Set":
      return "success";
    case "AMRAP":
      return "primary";
    default:
      return "input";
  }
};

// Calculate Working Weight & Adjust for Failed Lift and High RPE
export const calcWorkingWeight = (topSet, percent, rpeDif, lift) => {
  let adjustment;

  if (lift === "Bench") {
    adjustment = rpeDif * 5;
  } else {
    adjustment = rpeDif * 10;
  }

  return Math.ceil((topSet * (percent * 0.01)) / 5) * 5 - adjustment;
};
