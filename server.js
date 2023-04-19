const PORT = 4000;
import app from './app.js'
import {scheduleFirstRevision, scheduleRevisions } from './schedules.js'

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
   
  });