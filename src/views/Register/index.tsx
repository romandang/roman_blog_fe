import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterView = () => {
  return (
    <main>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="position-relative">
            <img
              src="assets/imgs/theme/plane.png"
              alt=""
              className="shape-arrow-login d-none d-lg-block"
            />
            <div className="row">
              <div className="col-lg-5 text-center">
                <img
                  className="mb-30"
                  src="assets/imgs/theme/mail.png"
                  alt=""
                />
                <h1 className="headline-1 font-heading">Register</h1>
                <p className="font-lg text-grey-400">
                  Already have an account?{" "}
                  <strong>
                    <a href="#">Sign in</a>
                  </strong>{" "}
                  now, or
                </p>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-5">
                <h3 className="font-heading mb-50">Create an account</h3>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterView;
