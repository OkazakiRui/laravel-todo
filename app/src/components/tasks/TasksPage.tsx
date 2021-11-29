import { VFC } from 'react';

const TasksPage: VFC = () => (
  <>
    <form className="input-form">
      <div className="inner">
        <input
          type="text"
          className="input"
          placeholder="TODOを入力してください。"
          value=""
        />
        <button type="submit" className="btn is-primary">
          追加
        </button>
      </div>
    </form>
    <div className="inner">
      <ul className="task-list">
        <li>
          <label className="checkbox-label" htmlFor="newTasks">
            <input type="checkbox" className="checkbox-input" id="newTasks" />
          </label>
          <div>
            <span>新しいTODO</span>
          </div>
          <button className="btn is-delete" type="button">
            削除
          </button>
        </li>
        <li>
          <label className="checkbox-label" htmlFor="editTasks">
            <input type="checkbox" className="checkbox-input" />
          </label>
          <form>
            <input
              type="text"
              className="input"
              value="編集中のTODO"
              id="editTasks"
            />
          </form>
          <button className="btn" type="button">
            更新
          </button>
        </li>
        <li className="done">
          <label className="checkbox-label" htmlFor="doneTasks">
            <input type="checkbox" className="checkbox-input" id="doneTasks" />
          </label>
          <div>
            <span>実行したTODO</span>
          </div>
          <button className="btn is-delete" type="button">
            削除
          </button>
        </li>
        <li>
          <label className="checkbox-label" htmlFor="aaa">
            <input type="checkbox" className="checkbox-input" id="aaa" />
          </label>
          <div>
            <span>ゴミ捨て</span>
          </div>
          <button className="btn is-delete" type="button">
            削除
          </button>
        </li>
        <li>
          <label className="checkbox-label" htmlFor="aaaa">
            <input type="checkbox" className="checkbox-input" id="aaaa" />
          </label>
          <div>
            <span>掃除</span>
          </div>
          <button className="btn is-delete" type="button">
            削除
          </button>
        </li>
      </ul>
    </div>
  </>
);

export default TasksPage;
