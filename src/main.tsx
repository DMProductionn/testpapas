import { createRoot } from 'react-dom/client';
import App from './app/App';
import './index.css';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
