-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM user
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, user.name, status.name
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title, user.name , task.created
FROM user
JOIN user_task ON user_task.user_id= user.id
JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Maryrose Meadows' AND MONTH(created) = 09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(*) , MONTHNAME(created) 
FROM task
GROUP BY MONTHNAME(created);

