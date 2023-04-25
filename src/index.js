import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './action';

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


console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("store changed" + store.getState);
})

store.dispatch(bugAdded("bug1"));

unsubscribe();

store.dispatch(bugAdded("bug2"));

store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(2));

console.log(store.getState());


