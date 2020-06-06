import React, { Component, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./register.css";
import authIlustration from "../../../assets/img/signup.svg";
import { Link } from "react-router-dom";
class Register extends Component {
  render() {
    return (
      <Fragment>
        <section className="register">
          <section className="kiri">
            <Link to="/" className="text-back">
              &#8592; Kembali
            </Link>
            <h1 className="text-formulir">Formulir Pendaftaran</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
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
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-form"
                  />
                  <ErrorMessage name="email" component="div" />
                  <br />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-form"
                  />
                  <ErrorMessage name="password" component="div" />
                  <br />
                  <button type="submit" disabled={isSubmitting}>
                    Daftar
                  </button>
                </Form>
              )}
            </Formik>
          </section>
          <section className="kanan">
            <div className="bungkus-gambar">
              <img src={authIlustration} alt="Register Ilustrator" />
            </div>
            <h4 className="text-pendaftaran">PPDB SMK N 2 KRA</h4>
            <p className="text-desc">
              Terimakasih atas kepercayaan anda terhadap SMK Bhina Karya
              Karanganyar sebagai pilihan untuk meraih masa depan.
            </p>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default Register;
