import express from "express";
import { setRevisionDates } from "../schedules.js"
import moment from 'moment'
const tasksRouter = express.Router();

//import functions from models:
import {
    getAllTasks,
    getTaskById,
    getTasksByRevDay,
    createTask,
    updateTaskById,
    deleteTaskById,
} from "../models/tasks.js"


//get all tasks
tasksRouter.get("/", async function (req, res, next) {
    try {
        const result = await getAllTasks();
        res.json({ success: true, payload: result });
    } catch (err) {
        next(err);
    }
});

//get tasks by rev_day
tasksRouter.get("/rev_day/:rev_day", async function (req, res, next){
    
    // try {
    //     const  = await getTasksByRevDay(req.params.rev_day, 5);
    //     console.log("get tasks by rev_day new", result)
    //     if (result.length > 0) {
    //         res.json({ success: true, payload: result });
    //     } else {
    //         res.status(404).json({ success: false, message: "Task not found" });
    //     }
    // } catch (err) {
    //     next(err);
    // }

    try {
        // const currentDate = moment().format("YYYY-MM-DD"); 
        const currentDate = req.params.rev_day
        const revisedTasksObj = await getTasksByRevDay(currentDate, 5)
        const revisedTaskArr = revisedTasksObj.rows;
        console.log("hi there", revisedTaskArr)

            if(revisedTaskArr.length> 0) {
                console.log(revisedTaskArr)
                res.json({ success: true, payload: revisedTaskArr});
            } else {
                res.status(404).json({ success: false, message: "Task not found" });
            }
        } catch(err) {
            next(err)
        }   
    
});

//get tasks by due rev_day

// tasksRouter.get("/due", async function (req, res, next) {   
    
    // try {
    //     const currentDate = moment().format("YYYY-MM-DD"); 
    //     const revisedTasksObj = await getTasksByRevDay(currentDate, 5)
    //     const revisedTaskArr = revisedTasksObj.rows;
    //     console.log(revisedTaskArr)

    //         if(revisedTaskArr.length> 0) {
    //             console.log(revisedTaskArr)
    //             res.json({ success: true, payload: revisedTaskArr});
    //         } else {
    //             res.status(404).json({ success: false, message: "Task not found" });
    //         }
    //     } catch(err) {
    //         next(err)
    //     }   
    
    // try {
    //     const currentDate = moment().format("YYYY-MM-DD");         
    //     const revisedTasksObj = await getTasksByRevDay(currentDate, 5);
    //     const revisedTaskArr = revisedTasksObj.rows
       
    //     console.log(revisedTaskArr)

    //     console.log(`Found ${revisedTaskArr.length} tasks to revise on ${currentDate}`);
    //   } catch (err) {
    //     console.error(err);
    //   }
        
    // })       
    
    tasksRouter.get("/due", (req, res) => {
        res.send("Connected to tasks due endpoint.");
      });

//get a task by id
tasksRouter.get("/:id", async function (req, res, next){
    try {
        const result = await getTaskById(req.params.id);
        if (result) {
            res.json({ success: true, payload: result });
        } else {
            res.status(404).json({ success: false, message: "Task not found" });
        }
    } catch (err) {
        next(err);
    }
});

//create a task and and generate rev_days add them into the database

tasksRouter.post("/", async function (req, res, next){
    try {
      const {userInput, questions} = req.body
      const { subject, task, word_count, difficulty, resources, topic } = userInput;
      const reviseDates = await setRevisionDates();
      const newTask = await createTask({ 
        subject,
        task,
        word_count,
        difficulty, 
        resources: questions,
        rev_day: reviseDates,
        topic
     })
      res.json({ success: true, payload: newTask });
      
    } catch (err) {
      next(err);
    }
  });
 

//update a task
tasksRouter.patch("/:id", async function (req, res, next){
    try {
        const result = await updateTaskById(req.params.id, req.body);
        if (result) {
            res.json({ success: true, payload: result });
        } else {
            res.status(404).json({ success: false, message: "Task not found" });
        }
    } catch (err) {
        next(err);
    }
});

//delete a task by id
tasksRouter.delete("/:id", async function (req, res, next) {
    try {
        const result = await deleteTaskById(req.params.id);
        if (result) {
            res.json({ success: true, payload: result });
        } else {
            res.status(404).json({ success: false, message: "Task not found" });
        }
    } catch (err) {
        next(err);
    }
});

//error handling middleware
tasksRouter.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal server error" });
});

export default tasksRouter;
