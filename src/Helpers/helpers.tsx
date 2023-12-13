export function getDisplayTime(time: string) {
  const timePart = time.split("T")[1];
  const hour = timePart.split(":")[0];
  const minute = timePart.split(":")[1];
  const period = parseInt(hour) > 11 ? "PM" : "AM";

  return `${hour}:${minute}${period}`;
}
