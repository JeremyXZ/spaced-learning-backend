import express from "express";
import {scheduleRecurringTasks} from "../schedules.js"
const tasksRouter = express.Router();


//import functions from models:
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
} from "../models/tasks.js"

// const createAndSchedule = (taskData) => {
//     const createdTask = await createTask(taskData);
//     scheduleRecurringTasks(createdTask);
// }


//get all tasks
tasksRouter.get("/", async function (req, res, next) {
    try {
        const result = await getAllTasks();
        res.json({ success: true, payload: result });
    } catch (err) {
        next(err);
    }
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

//create a task
tasksRouter.post("/", async function (req, res, next){
   
    try {
        const result = await createTask(req.body);
        res.json({ success: true, payload: result });
        scheduleRecurringTasks()

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
