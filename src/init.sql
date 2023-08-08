-- Create the 'notes' table
CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  time TIMESTAMP,
  content TEXT,
  category VARCHAR(255),
  archived BOOLEAN
);

-- Insert sample data
INSERT INTO notes (time, content, category, archived)
VALUES
  ('2023-07-30T10:00:00Z', 'Complete project proposal', 'Task', false),
  ('2023-07-31T15:30:00Z', 'Review code pull request', 'Code Review', false),
  ('2023-08-01T09:00:00Z', 'Prepare presentation slides', 'Task', false),
  ('2023-08-02T14:00:00Z', 'Fix bug in authentication module', 'Bug Fix', false),
  ('2023-08-03T12:30:00Z', 'Discuss project scope with stakeholders', 'Meeting', false),
  ('2023-08-04T16:45:00Z', 'Deploy application to production server', 'Deployment', false),
  ('2023-08-05T11:15:00Z', 'Write unit tests for user service', 'Testing', false);
