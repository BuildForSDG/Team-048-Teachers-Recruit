import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from './common/inputField';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';

const EductionDetails = (props) => {
  const { action, state } = useStateMachine(updateAction);
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.data
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    action(data);
    console.log(data);
    props.history.push('./workExperience');
  };

  const prevPage = () => {
    props.history.go(-1);
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50">
        <h2 className="text-center">Education Details</h2>
        <div className="form-row">
          <div className="col-6">
            <InputField
              type="text"
              ref={register({ required: true })}
              defaultValue={state.data.qualification}
              name="qualification"
              label="Qualification"
            />
            {errors.qualification && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-6">
            <InputField
              type="text"
              ref={register({ required: true })}
              defaultValue={state.data.grade}
              name="grade"
              label="Grade"
            />
            {errors.grade && <p className="alert alert-danger">This field is required</p>}
          </div>
          <div className="col-12">
            <InputField
              type="text"
              ref={register({ required: true })}
              defaultValue={state.data.institution}
              name="institution"
              label="Institution"
            />
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

export default withRouter(EductionDetails);
