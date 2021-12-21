import { getTasks, updateDoneTask, createTask } from 'api/TaskAPI';

// eslint-disable-next-line import/no-unresolved
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

/**
 * タスクの状態を更新できる
 */
export const useUpdateDoneTask: () => UseMutationResult<
  Task,
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

/**
 * タスクを登録することができる
 */
export const useCreateTask: () => UseMutationResult<
  Task,
  unknown,
  string,
  unknown
> = () => {
  const queryClient = useQueryClient();

  return useMutation(createTask, {
    onSuccess: () => {
      void queryClient.invalidateQueries('tasks');
      toast.success('登録に成功しました');
    },
    onError: () => {
      toast.error('登録に失敗しました');
    },
  });
};
