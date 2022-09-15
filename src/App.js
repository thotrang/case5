import './App.css';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { store } from './redux/store';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/home/Home';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path = "/home" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
