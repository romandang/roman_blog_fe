"use client";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

import React from "react";
import { REGISTER_URL } from "@/utils/routes";

const LoginView = () => {
  return (
    <main>
      <section className="pt-150 pb-150">
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
                  src="assets/imgs/theme/lock.png"
                  alt=""
                />
                <h1 className="headline-1 font-heading">Welcome Back</h1>
                <p className="font-lg text-grey-400">
                  If you don't have an account?{" "}
                  <strong>
                    <Link href={REGISTER_URL}>Sign up</Link>
                  </strong>{" "}
                  now, or
                </p>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-5">
                <h3 className="font-heading mb-50">Login</h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginView;
