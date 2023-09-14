import React,{useState} from 'react'
import "./register.scss"
import {Link} from "react-router-dom"
import { Formik } from "formik";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
const Register = () => {
  const [type,setType]=useState("password");
  const [visible,setVisible] =useState(false)
  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setVisible(!visible);
  };
  return (
    <section>
      <div className="container register-page">
        <div className="row">
          <div className="col-lg-6 left-side">
            <div className="texts">
              <h2>Offers ad-free viewing of high quality</h2>
              <p>
              Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem semper parturient. 
              </p>
            </div>
            <div className="images">
              <img
                src="https://s3-alpha-sig.figma.com/img/c25b/2833/03176f1b797ba8886a922a963752c678?Expires=1693785600&Signature=FqmaEGWonJfi-k80PN9Kcmx3ZAkOV2XzIkwa190HYfFtvCY9O6b-hYY1~T9jRPLcqU2MSFQGIwv3Y7zkRCigIUe1X1JTBUA2Adr7oLIKG0qX5ZJujA1v8fl9ja8Xn4yt4~yEBBi63lHAo5GfVzo4IIvLOfehkplkNG~L0xECWlpINZoYPrhYwt8IxoXJ6Rni6dlnsPQyWZSv1LB0kSkcyJjkWpo46j9eXaDY5RWTDOz689tcSeupZrw-hRwhF1Q~sk0WHESo8EJyKuY4Q6IMFvUaXucLepjFCU7jFlzbQHA324qgPjjo5P67~gYy~O6f8b609AeM~fgKpO7q1I3Xdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="screen"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/2735/6c21/154292d4de5a1a6dbcd36659d3998803?Expires=1693785600&Signature=cZo1xAo~tPxrr3m0z3Bd2cG3D2tCuvpP0CGn4NomRGiawoXxG7FtE5OAq6OG8HxGPacX0TBHZcPVMWV-nt5idzJiDUgpHTUQFpjSEsXqGjILcjQxZx8D9RHjj7VNIoQVTfGt-ynrtLr720WXaMIjZqOGRfk2Ctyx~UZpvxAg3HIBi~Y~6B2KYiAJ0dGSejGMMw780tQSRMIVh-JySqOk4qXrRu57KnHYUobcxG33CpGpx9hJXWi-Evof3wN1tUEYmdenJxJTt3xLzKZoF0gKI0i3~66ZS88mGQTH8MBmKxf20f-U8A8PsVfJcm6rgJza6aju-HupD7aiMGMD5IcnTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="computer"
              />
            </div>
          </div>
          <div className="col-lg-6 right-side">
            <div className="text">
            <p>CineMax</p>
            <h3>Register</h3>
            </div>
            <div className="form">
              <Formik
                initialValues={{ name: "",email:"", password: "" }}
                validate1={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  const pasExamp =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
                  if(values.password===""){
                    errors.password="Please,enter the code"
                  }
                  else if(pasExamp.test(password)){
                   errors.password="Password is Valid"
                  }
                  else if(!pasExamp.test(password)){
                    errors.password=("Password is not VALID")
                 }
                 else{
                  errors.password("");
               }
                  return errors;
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.name
                    )
                  ) {
                    errors.name = "Invalid name";
                  }
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form className="formik-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input
                    maxLength={15}
                    placeholder="Enter your name"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {touched.name && errors.name && <p id="errors">{errors.name}</p>}
                    <label htmlFor="email">Email Address</label>
                    <input
                    maxLength={15}
                    placeholder="Enter our email address"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email&& errors.email && <p id="errors">{errors.email}</p>}
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                      <AiOutlineEye onClick={handleToggle} className={visible ? "eye" : "eye-close"} />
                      <AiOutlineEyeInvisible onClick={handleToggle} className={!visible ? "eye" : "eye-close"}  />
                    <input
                    maxLength={15}
                    placeholder="Enter your password"
                      type={type}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {/* <span
                     className="strength-password"
                     data-score={score}
                     /> */}
                    </div>
                    {errors.password && touched.password && errors.password}
                    <label htmlFor="password">Confirm Password</label>
                    <div className="password-input">
                      <AiOutlineEye onClick={handleToggle} className={visible ? "eye" : "eye-close"} />
                      <AiOutlineEyeInvisible onClick={handleToggle} className={!visible ? "eye" : "eye-close"}  />
                    <input
                    maxLength={15}
                    placeholder="Enter your confirm password"
                      type={type}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {/* <span
                     className="strength-password"
                     data-score={score}
                     /> */}
                    </div>
                    {errors.password && touched.password && errors.password}
                    <button type="submit" disabled={isSubmitting}>
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              <p>Already have an account?<Link to="/" > Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register