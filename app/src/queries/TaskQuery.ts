import { getTasks, updateDoneTask } from 'api/TaskAPI';
import { Task } from 'types/Task';
import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';

export const useTasks: () => UseQueryResult<Task[], unknown> = () =>
  useQuery('tasks', () => getTasks());

export const useUpdateDoneTask: () => UseMutationResult<
  Task[],
  unknown,
  Task,
  unknown
> = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDoneTask, {
    onSuccess: () => {
      void queryClient.invalidateQueries('tasks');
    },
  });
};
