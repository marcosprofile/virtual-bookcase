import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todos from './routes/Todos';
import Lendo from './routes/Lendo';
import Lidos from './routes/Lidos';
import NaoLidos from './routes/NaoLidos';

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />
  },
  {
    path: '/lendo',
    element: <Lendo />
  },
  {
    path: '/lidos',
    element: <Lidos />
  },
  {
    path: '/nao_lidos',
    element: <NaoLidos />
  }
]); */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Todos />
      },
      {
        path: '/lendo',
        element: <Lendo />
      },
      {
        path: '/lidos',
        element: <Lidos />
      },
      {
        path: '/nao_lidos',
        element: <NaoLidos />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
