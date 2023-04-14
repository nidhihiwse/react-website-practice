import Todo from './components/Todo';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import PaintingsPage from './pages/Paintings';
import Header from './navigation/Header';
import PageNotFound from './pages/PageNotFound';
import NewCardPage from './pages/NewCardPage';
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
      </Routes>
    </div>
  );
}

export default App;
