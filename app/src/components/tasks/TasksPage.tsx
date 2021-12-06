import { VFC } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

type Task = {
  id: number;
  title: string;
  // eslint-disable-next-line camelcase
  is_done: boolean;
  // eslint-disable-next-line camelcase
  created_at: Date;
  // eslint-disable-next-line camelcase
  updated_at: Date;
};

const TasksPage: VFC = () => {
  /*
  const [tasks, setTasks] = useState<Task[]>([]);
  const getTasks = () => {
    axios
      .get<Task[]>('api/tasks')
      .then(({ data }) => setTasks(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTasks();
  });
  */

  const { data: tasks, status } = useQuery('tasks', async () => {
    const { data } = await axios.get<Task[]>('api/tasks');

    return data;
  });

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
