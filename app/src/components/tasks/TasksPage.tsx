import { VFC } from 'react';
import useTasks from 'queries/TaskQuery';

const TasksPage: VFC = () => {
  const { data: tasks, status } = useTasks();

  console.log(tasks, status);

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
      <form className="input-form">
        <div className="inner">
          <input
            type="text"
            className="input"
            placeholder="TODOを入力してください。"
            defaultValue=""
          />
          <button type="submit" className="btn is-primary">
            追加
          </button>
        </div>
      </form>

      <div className="inner">
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <label className="checkbox-label" htmlFor={String(task.id)}>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id={String(task.id)}
                />
              </label>
              <div>
                <span>{task.title}</span>
              </div>
              <button className="btn is-delete" type="button">
                削除
              </button>
            </li>
          ))}

          <li>
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
          </li>
        </ul>
      </div>
    </>
  );
};
export default TasksPage;
