import getTasks from 'api/TaskAPI';
import { useQuery, UseQueryResult } from 'react-query';

const useTasks: () => UseQueryResult<Task[], unknown> = () =>
  useQuery('tasks', () => getTasks());
export default useTasks;
