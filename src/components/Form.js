import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import "../css/form.css";
import * as actions from '../redux/actions/userAction'
import { MutatingDots } from "react-loader-spinner";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if(id){
    dispatch(actions.showUserStart(id))
    }
    return () => {
      dispatch(actions.showUserResClean())
    }
  }, [id])

  const {users, isLoading} = useSelector(state=> state.users);
  console.log('users',users)
  const initialEditVal = users.find((item) => item.id === id);
  useEffect(()=>{
      if (id) {
          for (const key in initialEditVal) {
              Formik.setFieldValue(key, initialEditVal[key]);
          }
      }
  }, [initialEditVal, id])

  const errorSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Too short!")
      .max(16, "Too big!"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age cannot be negative")
      .integer(),
    address: Yup.string().required("Address is required"),
  });
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      address: "",
    },
    validationSchema: errorSchema,
    onSubmit: (values, { resetForm }) => {
      if (!id) {
          dispatch(actions.addUserStart(values));
          resetForm();
            navigate('/');
      } else {
          dispatch(actions.editUserStart(id, values));
            navigate('/');
      }
    },
  });
  return (
    <div className="form-container">
      {isLoading && (
        <MutatingDots
          height="100"
          width="100"
          color="blue"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            paddingTop: '200px'
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      {!isLoading && <form onSubmit={Formik.handleSubmit}>
        <div className="input-container">
          <input className="input"
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.name}
          />
          {Formik.touched.name && Formik.errors.name && (
            <p className="error">{Formik.errors.name}</p>
          )}
        </div>
        <div className="input-container">
          <input className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            value={Formik.values.email}
          />
          {Formik.touched.email && Formik.errors.email && (
            <p className="error">{Formik.errors.email}</p>
          )}
        </div>
        <div className="input-container">
          <input className="input"
            type="number"
            name="age"
            placeholder="Enter age"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.age}
          />
          {Formik.touched.age && Formik.errors.age && (
            <p className="error">{Formik.errors.age}</p>
          )}
        </div>
        <div className="input-container">
          <input className="input"
            type="text"
            name="address"
            placeholder="Enter address"
            onBlur={Formik.handleBlur}
            onChange={Formik.handleChange}
            value={Formik.values.address}
          />
          {Formik.touched.address && Formik.errors.address && (
            <p className="error">{Formik.errors.address}</p>
          )}
        </div>
        <div>
        <button disabled={isLoading} className="form-btn" type="submit">{!id ? 'Post' : 'Update'}</button>
        <button className="form-back-btn" onClick={() => navigate('/')}>Go back</button>
        </div>
      </form>}
    </div>
  );
}

export default Form;