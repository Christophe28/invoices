import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './redux.ts';
import "./style/index.scss";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router basename='/invoices'>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
)
