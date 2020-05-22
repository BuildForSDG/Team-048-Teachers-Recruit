import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from './common/inputField';
import { Link, withRouter } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <div className="form-row">
          <h2 className="text-center">Enter your login details</h2>
          <div className="col-10 col-md-8 col-lg-8">
            <InputField
              type="email"
              name="email"
              ref={register({ required: true })}
              placeholder="Email..."
              label="Email Address"
            />
            {errors.email && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-8 col-lg-8">
            <InputField
              type="password"
              name="password"
              ref={register({ required: true})}
              placeholder="password..."
              label="Password"
            />
            {errors.password && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <Link to="/passwordReset">Forgot password?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
