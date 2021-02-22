import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  console.log();
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
