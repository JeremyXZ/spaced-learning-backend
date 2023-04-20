import moment from 'moment';
import schedule from "node-schedule"



const scheduleRecurringTasks = () => {
  const jobs = [];

  // Schedule the first occurrence of the task, 1 minute after saving the task
  const firstOccurrence = moment().add(1, 'minutes').toDate();
  jobs.push(schedule.scheduleJob(firstOccurrence, () => {
    // displayTask(task.id);
    console.log("1 m")
  }));

  // Schedule the second occurrence of the task, 2 minutes after saving the task
  const secondOccurrence = moment().add(2, 'minutes').toDate();
  jobs.push(schedule.scheduleJob(secondOccurrence, () => {
    // displayTask(task.id);
    console.log("2 m")
  }));

  // Schedule the third occurrence of the task, 3 minutes after saving the task
  const thirdOccurrence = moment().add(3, 'minutes').toDate();
  jobs.push(schedule.scheduleJob(thirdOccurrence, () => {
    // displayTask(task.id);
    console.log("3 m")
  }));

  // Schedule the fourth occurrence of the task, 4 minutes after saving the task
  const fourthOccurrence = moment().add(4, 'minutes').toDate();
  jobs.push(schedule.scheduleJob(fourthOccurrence, () => {
    // displayTask(task.id);
    console.log("4 m")
  }));

  return jobs;
};






// const scheduleRecurringTasks = (task) => {
//   const jobs = [];

//   // Schedule the first occurrence of the task, 1 day after saving the task at 6pm
//   const firstOccurrence = moment().add(1, 'day').hour(18).minute(0).second(0).toDate();
//   jobs.push(schedule.scheduleJob(firstOccurrence, () => {
//     displayTask(task.id);
//   }));

//   // Schedule the second occurrence of the task, 7 days after saving the task at 6pm
//   const secondOccurrence = moment().add(7, 'days').hour(18).minute(0).second(0).toDate();
//   jobs.push(schedule.scheduleJob(secondOccurrence, () => {
//     displayTask(task.id);
//   }));

//   // Schedule the third occurrence of the task, 16 days after saving the task at 6pm
//   const thirdOccurrence = moment().add(16, 'days').hour(18).minute(0).second(0).toDate();
//   jobs.push(schedule.scheduleJob(thirdOccurrence, () => {
//     displayTask(task.id);
//   }));

//   // Schedule the fourth occurrence of the task, 35 days after saving the task at 6pm
//   const fourthOccurrence = moment().add(35, 'days').hour(18).minute(0).second(0).toDate();
//   jobs.push(schedule.scheduleJob(fourthOccurrence, () => {
//     displayTask(task.id);
//   }));

//   return jobs;
// };



export { scheduleRecurringTasks }