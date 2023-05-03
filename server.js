import app from "./app.js";
import moment from "moment";
import { getTasksByRevDay } from "./models/tasks.js";

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
