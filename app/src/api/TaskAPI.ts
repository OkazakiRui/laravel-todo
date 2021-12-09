import axios from 'axios';
import { Task } from 'types/Task';

export const getTasks: () => Promise<Task[]> = async () => {
  const { data } = await axios.get<Task[]>('api/tasks');

  return data;
};
export const updateDoneTask = async ({ id }: Task) => {
  const { data } = await axios.patch<Task[]>(`api/tasks/update-done/${id}`);

  return data;
};
