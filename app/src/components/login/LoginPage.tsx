/* eslint-disable jsx-a11y/label-has-associated-control */
import { VFC } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: VFC = () => (
  <>
    <div className="login-page">
      <div className="login-panel">
        <form>
          <div className="input-group">
            <label>メールアドレス</label>
            <input type="email" className="input" />
          </div>
          <div className="input-group">
            <label>パスワード</label>
            <input type="password" className="input" />
          </div>
          <button type="submit" className="btn">
            ログイン
          </button>
        </form>
      </div>
      <div className="links">
        <Link to="/help">Help</Link>
      </div>
    </div>
  </>
);

export default LoginPage;
