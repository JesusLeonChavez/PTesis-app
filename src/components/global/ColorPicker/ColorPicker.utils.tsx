export const genColors = (number?: number) =>
  Array.from(new Array(number ?? 5)).map(
    () =>
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
  );
