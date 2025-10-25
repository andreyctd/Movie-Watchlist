import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import './App.css';
import { WatchlistProvider } from './features/watchlist/WatchlistContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchlistProvider>
        <App />
      </WatchlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
