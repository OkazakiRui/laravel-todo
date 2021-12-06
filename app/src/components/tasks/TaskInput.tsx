import { VFC } from 'react';

const TaskInput: VFC = () => (
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
);
export default TaskInput;
