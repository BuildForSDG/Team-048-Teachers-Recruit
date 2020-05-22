import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
  const { handleSubmit, register, errors, watch, reset } = useForm();

  const password = useRef({});
  password.current = watch('password');

  const changePassword = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(changePassword)}>
        <h2 className="text-center mt-3">Reset Password</h2>
        <div className="form-group">
          <label htmlFor="password">New password</label>
          <input
            type="password"
            ref={register({
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password must be 8 characters long'
              }
            })}
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        {errors.password && <p className="alert alert-danger">{errors.password.message}</p>}
        <div className="form-group">
          <label htmlFor="passwordTwo">Confirm password</label>
          <input
            type="password"
            ref={register({
              required: 'This field is required',
              validate: (value) => value === password.current || 'The passwords do not match'
            })}
            name="passwordTwo"
            className="form-control"
            id="password"
          />
        </div>
        {errors.passwordTwo && <p className="alert alert-danger">{errors.passwordTwo.message}</p>}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
