import './App.css';
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { store } from './redux/store';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Home from './components/home/Home';
import Home from "./pages/home/Home";
// import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    {/*<Route path = "/home" element={<Home/>}/>*/}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;


