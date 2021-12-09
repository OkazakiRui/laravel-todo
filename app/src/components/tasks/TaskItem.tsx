import { VFC } from 'react';
import { Task } from 'types/Task';
import { useUpdateDoneTask } from 'queries/TaskQuery';

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = ({ task }) => {
  const updateDoneTask = useUpdateDoneTask();

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
      <div>
        <span>{task.title}</span>
      </div>
      <button className="btn is-delete" type="button">
        削除
      </button>
    </li>
  );
};

export default TaskItem;
