import { getTasks, updateDoneTask } from 'api/TaskAPI';
import { Task } from 'types/Task';
import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';

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
    onError: () => {
      toast.error('更新に失敗しました');
    },
  });
};
