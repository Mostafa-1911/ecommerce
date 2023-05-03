import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  let navigate = useNavigate();

  async function register(values) {
    setIsLoading(true);
    setErrorMessage(null);
    let { data } = await axios
      .post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(err.response.data.errors.msg);
      });

    if (data == "success") {
      setIsLoading(false);
      navigate("/login");
    }
  }

  const mySchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Min char is 3")
      .max(15, "Max char is 15"),
    email: Yup.string().required("Email is Required").email("Invalid email"),
    password: Yup.string()
      .matches(/^[a-z0-9]{3,8}$/, "Invalid password")
      .required("Password is Reqired"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "repassword must be match")
      .required("Reqired"),
    phone: Yup.string()
      .required("Required")
      .matches(/^01[0125][0-9]{8}$/, "Invalid phone"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: mySchema,
    onSubmit:(values) => register(values),
  });

  return (
    <>
      <div className="container my-5 ">
        <h3>Register Now</h3>

        {errorMessage ? (
          <div className="alert alert-danger">{errorMessage}</div>
        ) : (
          ""
        )}

        <form className="w-75 mx-auto" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mb-2"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
      
          />

          {formik.errors.name ? (
            <div className="alert alert-danger">{formik.errors.name}</div>
          ) : (
            ""
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control mb-2"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : (
            ""
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control mb-2"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : (
            ""
          )}

          <label htmlFor="rePassword">rePassword</label>
          <input
            type="password"
            className="form-control mb-2"
            id="rePassword"
            name="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : (
            ""
          )}

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control mb-2"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.errors.phone ? (
            <div className="alert alert-danger">{formik.errors.phone}</div>
          ) : (
            ""
          )}

          {isLoading ? (
            <button className="btn bg-main text-white">
              <i className="fa fa-spin fa-spinner"></i>
            </button>
          ) : (
            <button className="btn bg-main text-white" type="submit">
              Register
            </button>
          )}
        </form>
      </div>
    </>
  );
}
