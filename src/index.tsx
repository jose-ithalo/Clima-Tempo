import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import TheRoutes from './routes';
import './css/responsive.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TheRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

