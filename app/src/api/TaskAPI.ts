import axios from 'axios';
import { Task } from 'types/Task';

const getTasks: () => Promise<Task[]> = async () => {
  const { data } = await axios.get<Task[]>('api/tasks');

  return data;
};
export default getTasks;
