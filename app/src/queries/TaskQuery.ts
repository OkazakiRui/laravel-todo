import {
  getTasks,
  updateDoneTask,
  createTask,
  updateTask,
  deleteTask,
} from 'api/TaskAPI';

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

/**
 * タスクのタイトルを更新することができる
 */
export const useUpdateTask: () => UseMutationResult<
  Task,
  unknown,
  { id: number; task: Task },
  unknown
> = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTask, {
    onSuccess: () => {
      void queryClient.invalidateQueries('tasks');
      toast.success('更新に成功しました');
    },
    onError: () => {
      toast.error('更新に失敗しました');
    },
  });
};

/**
 * タスクを削除することができる
 */
export const useDeleteTask: () => UseMutationResult<
  Task,
  unknown,
  number,
  unknown
> = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onSuccess: () => {
      void queryClient.invalidateQueries('tasks');
      toast.success('削除に成功しました');
    },
    onError: () => {
      toast.error('削除に失敗しました');
    },
  });
};
