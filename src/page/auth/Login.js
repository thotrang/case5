import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../service/userService";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import "./login.css";
import { checkPassword, checkUsernameExitsted, myProfile } from "../../redux/slice/userSlice";
import { useEffect } from "react";


export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (user) => {

        dispatch(loginApi({user, navigate}))
    }
    const checkPasswordRight = useSelector(checkPassword)
    const checkUsername = useSelector(checkUsernameExitsted)
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
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required(<span style={{ color: 'red' }}>Pleace input Username</span>),
                            password: Yup.string()
                                .required(<span style={{ color: 'red' }}>Pleace input Password</span>)
                        })
                        }
                        onSubmit={(user) => {
                            handleSubmit(user)
                        }}
                    >
                        <Form className="loginBox">
                            <Field placeholder="Username" className="loginInput" name="username" />
                            <ErrorMessage name={'username'}></ErrorMessage>
                            {checkUsername && <span style={{ color: 'red' }}>Username was not exitsted</span>}
                            {checkUsername && <br></br>}
                            <br></br>
                            <Field placeholder="Password" className="loginInput" name="password" />
                            <ErrorMessage name={'password'}></ErrorMessage>
                            {checkPasswordRight && <span style={{ color: 'red' }}>Password wrong</span>}
                            {checkPasswordRight && <br></br>}
                            <br></br>
                            <button className="loginButton">Log In</button>
                            <br></br>
                            <span className="loginForgot">Forgot Password?</span>
                            <Link className="linkA" to="/register">Create a New Account</Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div >
    );
}
