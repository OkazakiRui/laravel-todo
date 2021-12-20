import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';

const queryClient = new QueryClient({
  defaultOptions: {
    // err時に再取得を行う回数
    queries: {
      retry: false,
    },
    // 主にデータを更新するときに使う
    mutations: {
      retry: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ToastContainer hideProgressBar />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root'),
);

reportWebVitals();
