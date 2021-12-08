import { VFC } from 'react';
import useTasks from 'queries/TaskQuery';

const TaskList: VFC = () => {
  const { data: tasks, status } = useTasks();

  if (status === 'loading') return <div className="margin-top-mid loader" />;
  if (status === 'error')
    return (
      <div className="margin-top-mid align-center">
        データの読み込みに失敗しました。
      </div>
    );
  if (!tasks || tasks.length <= 0)
    return (
      <div className="margin-top-mid align-center">
        登録されたTODOはありません
      </div>
    );

  return (
    <>
      <div className="inner">
        <ul className="task-list">
          {tasks.map((task) => (
            <A task={task} />
          ))}

          {/* <li>
            <label className="checkbox-label" htmlFor="editTasks">
              <input type="checkbox" className="checkbox-input" />
            </label>
            <form>
              <input
                type="text"
                className="input"
                defaultValue="編集中のTODO"
                id="editTasks"
              />
            </form>
            <button className="btn" type="button">
              更新
            </button>
          </li>
          <li className="done">
            <label className="checkbox-label" htmlFor="doneTasks">
              <input
                type="checkbox"
                className="checkbox-input"
                id="doneTasks"
              />
            </label>
            <div>
              <span>実行したTODO</span>
            </div>
            <button className="btn is-delete" type="button">
              削除
            </button>
          </li> */}
        </ul>
      </div>
    </>
  );
};
export default TaskList;
