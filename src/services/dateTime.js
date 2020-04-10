import { format, parseISO } from "date-fns";

// convert ISO date string to long form (31 October 1996)
export const convertISODateToLong = (isoDate) => {
  try {
    return format(parseISO(isoDate), "d MMMM y");
  } catch (e) {
    return "invalid date";
  }
};

// convert ISO date string to short form (2020-01-01)
export const convertISODateToShort = (isoDate) => {
  try {
    return format(parseISO(isoDate), "y-MM-dd");
  } catch (e) {
    return "invalid date";
  }
};

// convert short date (yyyy-mm-dd) to ISO string w/o milliseconds (2019-07-09T01:00:00Z)
export const convertShortDateToISO = (short) => {
  try {
    return new Date(short).toISOString().slice(0, -5) + "Z";
  } catch (e) {
    return "invalid date";
  }
};

// trim ISO date string milliseconds
export const trimISOStringMs = (isoDateString) =>
  isoDateString.slice(0, -5) + "Z";
