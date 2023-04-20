import query from "../db/index.js"

//get all tasks
export async function getAllTasks(){
    const allTasks = await query("SELECT * FROM tasks")
    return allTasks.rows
}

//get task by id
export async function getTaskById(id){
    const tasksByID = await query("SELECT * FROM tasks WHERE id = $1", [id])
        
    return tasksByID.rows[0]
}

 // create task


export async function createTask(tks) {
    const { subject, date, task, word_count, difficulty, resources } = tks;
    const newTask = await query(
      "INSERT INTO tasks (subject, date, task, word_count, difficulty, resources) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [subject, date, task, word_count, difficulty, resources]
    );
    return newTask.rows;
  }


// Update question by id

 export async function updateTaskById (id,updatedTask) {
    const update = await query  ('UPDATE tasks SET subject=$1, date=$2, task=$3, word_count=$4, difficulty=$5, resources=$6 WHERE id = $7', [updatedTask.subject, updatedTask.tasks, updatedTask.task, updatedTask.word_count, updatedTask.difficulty, updatedTask.resources, id]);
    return update.rows
}

//Delete question 
export async function deleteTaskById(id){
    const deletedTask = await query("DELETE FROM tasks WHERE id = $1  RETURNING * ", [id])
    return deletedTask.rows[0]
}