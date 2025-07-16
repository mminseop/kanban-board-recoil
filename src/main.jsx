import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.jsx';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
