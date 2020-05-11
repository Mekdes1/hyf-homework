-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUE('read a book', 'will be reading one of my favorite books','2020-02-04 14:46:12', '2020-02-04 14:46:12' , '2020-05-04 14:46:12', 3, NULL);

-- Change the title of a task
UPDATE task 
SET title = 'Read my favorite book'
WHERE id= 36;

-- Change a task due date
UPDATE task
SET due_date = '2020-09-02 14:46:12'
WHERE id = 36;

-- Change a task status
UPDATE task
SET status_id = 1
WHERE id = 36;

-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 1;

-- Delete a task
  DELETE FROM task
  where id = 30;






