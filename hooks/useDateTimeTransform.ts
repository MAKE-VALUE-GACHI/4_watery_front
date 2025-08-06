export function splitDateToPicker(date: Date) {
  const hour24 = date.getHours();
  const ampm = hour24 < 12 ? "AM" : "PM";
  const hour12 = hour24 % 12 || 12;
  const minute = date.getMinutes();
  return {
    ampm,
    hour: hour12.toString(),
    minute: minute.toString().padStart(2, "0"),
  };
}

export function combinePickerToDate(base: Date, ampm: string, hour: string, minute: string) {
  let hour24 = Number(hour) % 12;
  if (ampm === "PM") hour24 += 12;
  if (ampm === "AM" && hour24 === 12) hour24 = 0;
  const newDate = new Date(base);
  newDate.setHours(hour24, Number(minute), 0, 0);
  return newDate;
}
