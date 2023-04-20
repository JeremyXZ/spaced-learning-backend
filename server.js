const PORT = 4000;
import app from './app.js'
// import {scheduleRecurringTasks } from './schedules.js'

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
    
    // scheduleRecurringTasks(tasks);
  });