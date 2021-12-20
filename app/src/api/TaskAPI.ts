import axios from 'axios';
import { Task } from 'types/Task';

export const getTasks: () => Promise<Task[]> = async () => {
  const { data } = await axios.get<Task[]>('api/tasks');

  return data;
};
// eslint-disable-next-line camelcase
export const updateDoneTask = async ({ id, is_done }: Task) => {
  const { data } = await axios.patch<Task[]>(`api/tasks/update-done/${id}`, {
    // eslint-disable-next-line camelcase
    is_done: !is_done,
  });

  return data;
};
