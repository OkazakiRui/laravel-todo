/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  useState,
  VFC,
  KeyboardEventHandler,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';
import { Task } from 'types/Task';
import {
  useDeleteTask,
  useUpdateDoneTask,
  useUpdateTask,
} from 'queries/TaskQuery';
import { toast } from 'react-toastify';

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = ({ task }) => {
  const updateDoneTask = useUpdateDoneTask();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

  const handleEditTitle = () => setEditTitle(task.title);

  const handleOnKey: KeyboardEventHandler<HTMLInputElement> = ({ key }) =>
    ['Escape', 'Tab'].includes(key) ? setEditTitle(undefined) : '';

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setEditTitle(target.value);

  const handleUpdateTask: MouseEventHandler<HTMLButtonElement> = () => {
    // eslint-disable-next-line no-useless-return
    if (!editTitle) {
      toast.error('タイトルを入力してください');

      return;
    }
    const newTask = { ...task };
    newTask.title = editTitle;
    updateTask.mutate({
      id: task.id,
      task: newTask,
    });
    setEditTitle(undefined);
  };

  const handleDeleteTask: MouseEventHandler<HTMLButtonElement> = () => {
    deleteTask.mutate(task.id);
  };

  const ItemInput = () => (
    <>
      <form>
        <input
          type="text"
          className="input"
          defaultValue={editTitle}
          onKeyDown={handleOnKey}
          onChange={handleChangeTitle}
        />
      </form>
      <button className="btn" type="button" onClick={handleUpdateTask}>
        更新
      </button>
    </>
  );

  const ItemTitle = () => (
    <>
      <div onClick={handleEditTitle}>
        <span>{task.title}</span>
      </div>
      <button
        className="btn is-delete"
        type="button"
        onClick={handleDeleteTask}
      >
        削除
      </button>
    </>
  );

  return (
    <li className={task.is_done ? 'done' : ''} key={task.id}>
      <label className="checkbox-label" htmlFor={String(task.id)}>
        <input
          type="checkbox"
          className="checkbox-input"
          id={String(task.id)}
          onClick={() => updateDoneTask.mutate(task)}
        />
      </label>
      {editTitle === undefined ? ItemTitle() : ItemInput()}
    </li>
  );
};

export default TaskItem;
