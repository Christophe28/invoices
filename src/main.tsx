import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux.ts';
import "./style/index.scss";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename="/">
      <Provider store={myStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
