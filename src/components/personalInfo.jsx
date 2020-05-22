import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';
import InputField from './common/inputField';
import PhoneInput from './common/phoneInput';

const PersonalInfoForm = (props) => {
  const { action, state } = useStateMachine(updateAction);

  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.data
  });

  const onSubmit = (data) => {
    action(data);
    console.log(data);
    console.log(state.data.email);

    props.history.push('./education');
  };

  const sex = 'male female others'.split(' ');
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <div className="form-row">
          <div className="col-10 col-md-6 col-lg-6">
            <InputField
              type="text"
              ref={register({
                required: true
              })}
              name="firstName"
              label="First Name"
            />
            {errors.firstName && <p className="alert alert-danger">This field is required</p>}
            <InputField type="email" name="email" ref={register({ required: true })} label="Email" />
            {errors.email && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField type="text" ref={register({ required: true })} name="lastName" label="Last Name" />
            {errors.lastName && <p className="alert alert-danger">This field is required</p>}
            <PhoneInput name="PhoneNumber" ref={register({ required: true })} />
            {errors.PhoneNumber && <p className="alert alert-danger">This field is required</p>}
          </div>

          <div className="col-10 col-md-12 col-lg-12">
            <InputField type="text" ref={register({ required: true })} name="street" label="Residential Address" />
            {errors.street && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField type="text" ref={register({ required: true })} name="city" label="City" />
            {errors.city && <p className="alert alert-danger">This field is required</p>}

            {sex.map((c, i) => (
              <label key={c}>
                <input type="checkbox" className="input" name={c} ref={register} value={c} />
                {c}
              </label>
            ))}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField
              type="text"
              ref={register({ required: true })}
              defaultValue={state.data.country}
              name="country"
              label="Country"
            />
            {errors.country && <p className="alert alert-danger">This field is required</p>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Next Step
        </button>
      </form>
    </div>
  );
};
export default withRouter(PersonalInfoForm);
