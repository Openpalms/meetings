import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import MenuCOPY from './components/Menu/MC';
import LoginScreen from './components/LoginScreen/LoginScreen';
import LikedUserList from './components/LikedUserList/LikedUserList';
import { useSelector } from 'react-redux';
function App() {
  const isLogined = useSelector((state) => state.login.isLogined);

  return (
    <>
      {isLogined ? <Navibar /> : null}
      <Routes>
        {isLogined ? (
          <>
            {' '}
            <Route path="" element={<Menu />} />
            {/* <Route path="" element={<MenuCOPY />} /> */}
            <Route path="/likes" element={<LikedUserList />} />
          </>
        ) : null}
      </Routes>
      {!isLogined ? <LoginScreen /> : null}
    </>
  );
}

export default App;
