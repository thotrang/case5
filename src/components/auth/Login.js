import { Form, Field, Formik } from "formik";
import { useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";
import { loginApi } from "../../service/userService";

function Login(){
    const dispatch= useDispatch()
    const navigate= useNavigate()

    const handleLogin=(value)=>{
        dispatch(loginApi({value,navigate}))
    }

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    username:'',
                    password:''
                }}
                onSubmit={(value)=>{
                    handleLogin(value)
                }}
            >
                <Form>
                    <label>Username</label>
                    <Field name={'username'}></Field>
                    <br></br>
                    <label>Password</label>
                    <Field name="password"></Field>
                    <br></br>
                    <button>Login</button>
                </Form>
            </Formik>
        </div>
    )
}
export default Login
