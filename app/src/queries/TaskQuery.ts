import getTasks from 'api/TaskAPI';
import { Task } from 'types/Task';
import { useQuery, UseQueryResult } from 'react-query';

const useTasks: () => UseQueryResult<Task[], unknown> = () =>
  useQuery('tasks', () => getTasks());
export default useTasks;
