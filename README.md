# spaced-learning-backend

The app aims to help students revise what they have learned in spaced repetition, namely 1, 7, 16 and 35 days after their initial learning session. In this way, students can effectively retain information for longer periods and improve their learning efficiently. 


Basic steps to implement the schedule: 

1) On the frontend, two panels are displayed:  Learn and revise.

2) In “Learn” areas, users are asked to fill in  these field: subject, task/topic, word-count, resources/notes, difficulty level. In the task field, students can paste a chunk of texts they want to memorise and Open Ai will generate a list of questions and placed in front of the text.  When the scheduled day arrives, the questions will be displayed in the revise area and students can write down their answers after those questions.  When they click "Get Answer", the chunk of text will appear 

3) After completing all the fields, they click ”Save Task” button and all the info input by the users will be saved to the database through Axios.

4) In addition to saving/updating data to the database,  the next revision date will be scheduled by node.cron and added to the same database through Axio as well. 

5) On the backend, set up a database table “tasks” with 8 columns: id, subject, date, task, word-count, difficulty, resources and rev_day

6) Set up connection to elephantsql  database using "pg" (pool)

7) Set up helper functions that query the database

8) Set up router and sub-routers to responds to Axios api calls from the frontend