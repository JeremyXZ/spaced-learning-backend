import moment from "moment";

const setRevisionDates = async () => {
  const revisionDays = [1, 7, 16, 35];
  const reviseDates = revisionDays.map((day) =>
    moment().add(day, "days").format("YYYY-MM-DD")
  );
  console.log(reviseDates);
  return reviseDates;
};

export { setRevisionDates };
