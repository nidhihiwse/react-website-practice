import Todo from './components/Todo';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Home';
import ProfilePage from './components/pages/Profile';
import PaintingsPage from './components/pages/Paintings';
import Header from './components/navigation/Header';
import PageNotFound from './components/pages/PageNotFound';
import NewCardPage from './components/pages/NewCardPage';
import Favourites from './components/pages/Favourites';
function App() {
  return (
    <div>
      {/* <h1>My Todos</h1>
      <Todo title="home"/>
      <Todo title="car"/>
      <Todo title="baby"/> */}
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"profile"} element={<ProfilePage/>}/>
        <Route path={"paintings"} element={<PaintingsPage/>}/>
        <Route path={"addnewcard"} element={<NewCardPage/>}/>
        <Route path={"favourite"} element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
