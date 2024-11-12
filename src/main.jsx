import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';  // 전체 스타일을 적용하기 위해 App.css 불러오기


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
