import { VFC } from 'react';
import { Task } from 'types/Task';

type Props = {
  task: Task;
};

const TaskItem: VFC<Props> = ({ task }) => (
  <li key={task.id}>
    <label className="checkbox-label" htmlFor={String(task.id)}>
      <input type="checkbox" className="checkbox-input" id={String(task.id)} />
    </label>
    <div>
      <span>{task.title}</span>
    </div>
    <button className="btn is-delete" type="button">
      削除
    </button>
  </li>
);

export default TaskItem;
