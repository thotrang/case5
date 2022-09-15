import { Form, Field, Formik } from "formik";
import { useDispatch} from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { registerApi } from "../../service/userService";

function Register() {
    const dispatch = useDispatch()
    const handleSubmit = (value) => {
        dispatch(registerApi(value))
    }
    const navigate = useNavigate();

    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    name: "",
                    dob: "",
                    avatar: ""
                }}
                // enableReinitialize

                onSubmit={(value) => {
                    handleSubmit(value)
                }}
            >
                <Form>
                    <label>Username</label>
                    <Field name={'username'}></Field>
                    <br></br>
                    <label>Password</label>
                    <Field name={'password'}></Field>
                    <br></br>
                    <label>Name</label>
                    <Field name={'name'}></Field>
                    <br></br>
                    <label>Email</label>
                    <Field name={'email'}></Field>
                    <br></br>

                    <button>Submit</button>
                </Form>
            </Formik>
            <Link fontSize="0.85rem" onClick={navigate("/login")}>
                Already have an account? Log In
            </Link>
        </div >
    )
}
export default Register