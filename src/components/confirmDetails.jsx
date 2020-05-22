import React from 'react';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';

const ConfirmDetails = (props) => {
  const { state } = useStateMachine(updateAction);
  const result = state.data;
  console.log(result);

  const getSex = () => {
    if (result.male) return 'Male';
    if (result.female) return 'Female';
    if (result.others) return 'Others';
  };

  const submitApplication = () => {
    props.history.push('./success');
  };

  const goBack = () => {
    props.history.go(-1);
  };
  return (
    <>
      <div className="jumbotron d-flex justify-content-center">
        <ul className="list-group">
          <h2 className="text-center">Confirm details</h2>
          <li className="list-group-item">First Name: {result.firstName}</li>
          <li className="list-group-item">Last Name: {result.lastName} </li>
          <li className="list-group-item">Email: {result.email}</li>
          <li className="list-group-item">Phone Number: {result.PhoneNumber}</li>
          <li className="list-group-item">Address: {result.street}</li>
          <li className="list-group-item">City: {result.city}</li>
          <li className="list-group-item">Country: {result.country}</li>
          <li className="list-group-item">Gender: {getSex()}</li>
          <li className="list-group-item">Qualification: {result.qualification}</li>
          <li className="list-group-item">Grade: {result.grade}</li>
          <li className="list-group-item">Institution Attended: {result.institution}</li>
          <li className="list-group-item">Years of experience: {result.period1}</li>
          <li className="list-group-item">Organization: {result.organization1}</li>
          <li className="list-group-item">Work address: {result.workAdrress}</li>
          {result.period2 && <li className="list-group-item">Years of experience: {result.period2}</li>}
          {result.organization2 && <li className="list-group-item">Organization: {result.organization2}</li>}
          {result.workAdrress2 && <li className="list-group-item">Work address: {result.workAdrress2}</li>}
          <li className="list-group-item">
            
              <button type="button" onClick={goBack} className="btn btn-secondary pull-left">
                Back
              </button>
              <button type="button" onClick={submitApplication} className="btn btn-primary pull-right">
                Submit
              </button>
           
          </li>
        </ul>
      </div>
    </>
  );
};

export default withRouter(ConfirmDetails);
