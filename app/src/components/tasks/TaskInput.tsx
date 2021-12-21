import { useCreateTask } from 'queries/TaskQuery';
import { VFC, useState, FormEvent } from 'react';

const TaskInput: VFC = () => {
  const [title, setTitle] = useState('');

  const { mutate } = useCreateTask();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    mutate(title);
    setTitle('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="inner">
        <input
          type="text"
          className="input"
          placeholder="TODOを入力してください。"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <button type="submit" className="btn is-primary">
          追加
        </button>
      </div>
    </form>
  );
};
export default TaskInput;
