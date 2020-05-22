import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Link, withRouter } from 'react-router-dom';

const SignUpForm = (props) => {
  const { register, handleSubmit, reset, watch, errors } = useForm();

  const password = useRef({});
  password.current = watch('password');
  const onSubmit = (data) => {
    console.log(data);
    props.history.push('./verifyEmail');
    reset();
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-3">
        <h2 className="text-center mt-2 mb-3">User signup details</h2>
        <div className="form-row">
          <div className="col-10 col-md-6 col-lg-12">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                ref={register({
                  required: 'You must enter an email address',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
                placeholder="Email Address..."
              />
            </div>
            {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                ref={register({
                  required: 'You must specify a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have atleast 8 characters'
                  }
                })}
              />
            </div>
            {errors.password && <p className="alert alert-danger">{errors.password.message}</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <div className="form-group">
              <label htmlFor="passwordRepeat">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="passwordRepeat"
                id="passwordRepeat"
                ref={register({
                  validate: (value) => value === password.current || 'The passwords do not match'
                })}
              />
            </div>
            {errors.passwordRepeat && <p className="alert alert-danger">{errors.passwordRepeat.message}</p>}
          </div>

          <div className="form-group col-10 col-md-12 col-lg-12">
            <p className="text-center">
              Already have an account? <Link to="/login">Sign in</Link>{' '}
            </p>
          </div>
          <div className="form-group col-10 col-md-12 col-lg-12">
            <button type="submit" className="btn btn-outline-primary btn-block">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
