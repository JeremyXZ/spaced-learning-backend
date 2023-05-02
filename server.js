import app from "./app.js";
import moment from "moment";
import { getTasksByRevDay } from "./models/tasks.js";

const PORT = 4000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
