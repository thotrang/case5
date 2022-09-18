import './App.css';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { store } from './redux/store';
import Register from './page/auth/Register';
import Login from './page/auth/Login';
import Home from './page/home/Home';
// import Profile from './page/profile/Profile';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path = '/' element={<Home></Home>}></Route>
        <Route path = '/home' element={<Home></Home>}></Route>

        {/* <Route path = "/Profile/:id" element = {<Profile></Profile>}></Route> */}
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
