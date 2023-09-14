import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { Formik } from "formik";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import zxcvbn from "zxcvbn";
const Login = () => {
  const [type, setType] = useState("password");
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setVisible(!visible);
  };
  // const [score,setScore]=useState("null");
  return (
    <section>
      <div className="container login-page">
        <div className="row">
          <div className="col-lg-6 left-side">
            <div className="texts">
              <h2>The biggest international and local film streaming</h2>
              <p>
                Semper in cursus magna et eu varius nunc adipiscing. Elementum
                justo, laoreet id sem semper parturient.{" "}
              </p>
            </div>
            <div className="images">
              <img
                src="https://s3-alpha-sig.figma.com/img/79f1/f206/b3a48f73338b7920ba8834558db53848?Expires=1693785600&Signature=Ubq-n9eacxGbN9k2M0Z~lvoyQDjz5h64tsNFWTtSrGeefAqg1EyKsgnFveFnnudiDf0GhBNNcZk3h7F9-fxyZbxu4Q-p3kM6X5wSHD85a6bgYTJTurYw0tNy1EGNDArX~XEoZTpY1q3jsSgAyLq64N5mftkXDnWUvHgfCDUVuuUcqtx9qjvp9aOp4fhg5j5DzOa9K1HlCBJ0wpdXQ3k6YWs-yAsAVuXudgdnwfAB8z2UeVQ481qb~i1OsUai-CZQBiiicuTk1iaeBQLJTlEZGThRtOea42nHdnkMNSL4Xu2pr5Q2Zmfy7Tano6AyDwN8zQQ1sXYlh2fBUibn9V6vmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="phone"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/c09e/5d79/4fa252069dd9a8dd206f17d76fe97d05?Expires=1693785600&Signature=KcyGVg8hdP4xRRhUoIveGPwmA2U~~GhFPaHTxXpckmj~5KQoTfiDvisoeC5RI9yh3nfRhoqp6HwXuQlEfgEUSAfp44G5wGBkw3ZmFyCYhEY7oM9NhwE7x2VYAZgYphodGB2SVu98OrKb1A~vcXIf9AWrl6CHCrrEutzOzQ9U8D6-sdKWdGYUl1xGjw3-x5O7alEO4fgvITpTVM6cSL~60M8skJD-mjoJ33YgAB~xWoB5KmZuvlc1UWEFY4OH1zweQnZsKQqd2exlXhNUZGoXGA-aP0G~TEwu4uRRgeqDWHJUpoZlh4QYhIt4KdJpSW3kle~9mxwhyWt2gEpoa9gNEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="back"
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/2fd2/2f68/81905a471eb90e962810e05ea1e6a732?Expires=1693785600&Signature=iizfTFsqduSC~ct4XUt4C5mNDwQDn0d8lmHL-Hk1iU5t-T88ve0LqEapl5akgyA-tc6KXqQkpQYB6UlG-z0EOABGupK0DGWC9Qvk4RB33u7wt5LH95htTKfHf5m1a4Pp-Wdr2bcCfot80qbmRl-Sjgy2Fh7ia~v-yv7rXoR7l8tW-gUc3ySoTEbcFSHgpo~1pRxYd-Bmhs3~jyrJdxQVlxnXlUowf~LUfkPVCeyYQq57dcD8z4jGCjbNTOdMfkHNCIEnxUnrhtPT7ZtGGcXHp0m5zXVuf25x9bxRpJKUPSnmQgMQGC-4XbQpwTDj3ioUljGXjMQqZQQxQZRnaYsWfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <h3>Hey there, welcome back</h3>
            </div>
            <div className="buttons">
              <button className="button-1">
                <FcGoogle />
                Login with Google
              </button>
              <button className="button-2">
                <ImFacebook className="fc" />
                Login with Facebook
              </button>
            </div>
            <div className="line">
              <hr />
              <span>Or login with</span>
              <hr />
            </div>
            <div className="form">
              <Formik
                initialValues={{ name: "", password: "" }}
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
                  const pasExamp =
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
                  if (values.password === "") {
                    errors.password = "Please,enter the code";
                  } else if (pasExamp.test(password)) {
                    errors.password = "Password is Valid";
                  } else if (!pasExamp.test(password)) {
                    errors.password = "Password is not VALID";
                  } else {
                    errors.password("");
                  }
                  //  const [score,setScore]=useState("null");
                  //  const testStrength = (e)=>{
                  //   if(e.target.value !==0){
                  //     let pass = zxcvbn(e.target.value);
                  //     setScore(pass.score)
                  //   }
                  //   else{
                  //     setScore("null");
                  //   }
                  //  }
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
                  testStrength,
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
                    {touched.name && errors.name && (
                      <p id="errors">{errors.name}</p>
                    )}
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                      {visible ? (
                        <AiOutlineEye onClick={handleToggle} />
                      ) : (
                        <AiOutlineEyeInvisible onClick={handleToggle} />
                      )}

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
                    {touched.password && errors.password && (
                      <p id="errors">{errors.password}</p>
                    )}
                    <button type="submit" disabled={isSubmitting}>
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              <p>
                Don’t have an account?<Link to="./register"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
