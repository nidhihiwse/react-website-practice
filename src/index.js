import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// In standard javascript named exports are imported within {}
import { FavouritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavouritesContextProvider>
  </React.StrictMode>
);


