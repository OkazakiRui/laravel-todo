/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { Task } from 'types/Task';

export const getTasks: () => Promise<Task[]> = async () => {
  const { data } = await axios.get<Task[]>('api/tasks');

  return data;
};

// eslint-disable-next-line camelcase
export const updateDoneTask = async ({ id, is_done }: Task) => {
  const { data } = await axios.patch<Task>(`api/tasks/update-done/${id}`, {
    // eslint-disable-next-line camelcase
    is_done: !is_done,
  });

  return data;
};

export const createTask = async (title: string) => {
  const { data } = await axios.post<Task>(`api/tasks`, {
    title,
  });

  return data;
};
