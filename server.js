import cron from "node-cron";
import app from "./app.js";
import moment from "moment";
import { getTasksByRevDay } from "./models/tasks.js";

const PORT = 4000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);

  console.log("Starting cron job...");

  // check for tasks with rev_day equal to currentDate at 18:30 every day
  cron.schedule("30 11 * * *", async () => {
    try {
      const currentDate = moment().format("YYYY-MM-DD");

      const revisedTasksObj = await getTasksByRevDay(currentDate, 5);
      const revisedTaskArr = revisedTasksObj.rows;

      console.log(
        `Found ${revisedTaskArr.length} tasks to revise on ${currentDate}`
      );
    } catch (err) {
      console.error(err);
    }
  });
});
