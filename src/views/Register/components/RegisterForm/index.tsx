import React from "react";

const RegisterForm = () => {
  return (
    <form className="form-contact comment_form" action="#" id="commentForm">
      <div className="form-group">
        <input
          className="form-control"
          name="username"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="email"
          id="email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="password-2"
          id="password-2"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="form-group">
        <div className="checkbox">
          <div className="custome-checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              name="checkbox"
              id="createaccount"
            />
            <label className="form-check-label label_info fw-700 text-grey-100 font-md">
              <span>I agree to terms &amp; Policy.</span>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <button
          className="btn btn-lg bg-dark text-white text-uppercase"
          type="submit"
        >
          Submit &amp; register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
