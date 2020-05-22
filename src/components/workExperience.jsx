import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from './common/inputField';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';

const WorkExperience = (props) => {
  const { action, state } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.data
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    action(data);
    console.log(data);
    props.history.push('./confirm');
  };

  const prevPage = () => {
    props.history.go(-1);
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <h2 className="text-center">Work Experience</h2>
        <div className="form-row">
          <div className="col-10 col-md-6">
            <InputField type="number" ref={register({ required: true })} name="period1" label="Years of experience" />
            {errors.period1 && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField type="number" ref={register({ required: true })} name="organization1" label="Organization" />
            {errors.organization1 && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <InputField type="text" ref={register({ required: true })} name="workAdrress" label="Address" />
            {errors.workAddress && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField type="number" ref={register} name="period2" label="Years of experience" />
          </div>
          <div className="col-10 col-md-6 col-lg-6">
            <InputField type="number" name="organization2" ref={register} label="Organization" />
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <InputField type="text" name="workAdrress2" ref={register} label="Address" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary pull-right">
          Continue
        </button>

        <button onClick={prevPage} className="btn btn-warning pull-left">
          Previous
        </button>
      </form>
    </div>
  );
};

export default WorkExperience;
