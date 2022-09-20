
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerApi } from "../../service/userService";
import "./register.css";
import validator from "validator";
import { checkEmailExitsted, checkUsernameExitsted } from "../../redux/slice/userSlice";

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: '',
        name: "",
    })
    const [isInputNull, setIsInputNull] = useState(false)
    const [isRePassword, setIsRePassword] = useState(false)
    const [checkFormEmail, setCheckFormEmail] = useState(false);

    const checkEmail = useSelector(checkEmailExitsted);
    const checkUsername = useSelector(checkUsernameExitsted)

    const handleSubmit = () => {
        if (!user.name || !user.username || !user.email || !user.password || !user.rePassword) {
            setIsInputNull(true)
        } else {
            setIsInputNull(false)
            if (!validator.isEmail(user.email)) {
                setCheckFormEmail(true)
            } else {
                setCheckFormEmail(false)
                if (user.password !== user.rePassword) {
                    setIsRePassword(true)
                } else {
                    setIsRePassword(false)
                    dispatch(registerApi({user,navigate}))
                }
            }
        }
  
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">White Rabbit</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" id="username" className="loginInput" name="username" onChange={(e) => { handleChange(e) }} />
                        <br></br>
                        {checkUsername && <span style={{ color: 'red' }}>Username was exitsted</span>}
                        {checkUsername && <br></br>}

                        <input placeholder="Name" className="loginInput" name="name" onChange={(e) => { handleChange(e) }} />
                        <br></br>

                        <input placeholder="Email" className="loginInput" name="email" onChange={(e) => { handleChange(e) }} /> <br></br>
                        {checkEmail && <span style={{ color: 'red' }}>Email was exitsted</span>}
                        {checkEmail && <br></br>}
                        {checkFormEmail && <span style={{ color: 'red' }}>Wrong email... please in put email with validator xxx@xxx.xxx</span>}
                        {checkFormEmail && <br></br>}

                        <input placeholder="Password" className="loginInput" name="password" type={"password"} onChange={(e) => { handleChange(e) }} /> <br></br>

                        <input placeholder="Password Again" className="loginInput" type={"password"} name="rePassword" onChange={(e) => { handleChange(e) }} /> <br></br>
                        {isRePassword && <span style={{ color: 'red' }}>RePassword wrong</span>}
                        {isRePassword && <br></br>}

                        {isInputNull && <span style={{ color: 'red' }}>Please complete all information</span>}
                        {isInputNull && <br></br>}

                        <button className="loginButton" onClick={() => { handleSubmit() }}>Sign Up</button> <br></br>

                        <Link to="/login" className="linkA">Log into Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}