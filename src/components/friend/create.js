// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {addFriendThunk} from "../../service/friendService";
// import {Field,Form, Formik} from "formik";
//
// export default function CreateFriend() {
//     const navigate = useNavigate
//     const dispatch = useDispatch
//     const handleCreate = (data) => {
//         dispatch(addFriendThunk(data))
//         navigate('/list')
//     }
//     return (
//         <Formik
//             initialValues={{
//                 name: '',
//                 age: '',
//                 relationship: '',
//                 location: ''
//             }}
//             onSubmit={(values => {
//                 handleCreate(values)
//             })}
//         >
//             <Form>
//                 <label htmlFor="name">Name</label>
//                 <Field name="name"></Field>
//                 <br/>
//                 <label htmlFor="age">Age</label>
//                 <Field name="age"></Field>
//                 <br/>
//                 <label htmlFor="relationship">Relationship</label>
//                 <Field name="relationship"></Field>
//                 <br/>
//                 <button>Add</button>
//             </Form>
//
//         </Formik>
//     )
// }