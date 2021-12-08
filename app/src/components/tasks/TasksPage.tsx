import { VFC } from 'react';
import TaskInput from 'components/tasks/TaskInput';
import TaskList from 'components/tasks/TaskList';

const TasksPage: VFC = () => (
  <>
    <TaskInput />
    <TaskList />
  </>
);
export default TasksPage;
