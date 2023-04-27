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

//get tasks by rev_day
export async function getTasksByRevDay(day, limit) {
   
  const tasks = await query('SELECT * FROM tasks WHERE $1 = ANY (rev_day) LIMIT $2', [day, limit]);

  return tasks || [];
}

 // create task

export async function createTask(tks) {
  const { subject, task, word_count, difficulty, resources, rev_day, topic } = tks;
  
  const newTask = await query(
    "INSERT INTO tasks (subject, task, word_count, difficulty, resources, rev_day, topic) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [subject, task, word_count, difficulty, resources, rev_day, topic]
  );
  return newTask.rows[0];
}



// Update tasks by id

 export async function updateTaskById (id,updatedTask) {
    const update = await query  ('UPDATE tasks SET subject=$1, task=$2, word_count=$3, difficulty=$4, resources=$5 topic=$6 WHERE id = $7', [updatedTask.subject, updatedTask.task, updatedTask.word_count, updatedTask.difficulty, updatedTask.resources, updatedTask.topic]);
    return update.rows
}

//Delete question 
export async function deleteTaskById(id){
    const deletedTask = await query("DELETE FROM tasks WHERE id = $1  RETURNING * ", [id])
    return deletedTask.rows[0]
}