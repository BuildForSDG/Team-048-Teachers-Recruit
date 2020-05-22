import React from 'react';
import { withRouter } from 'react-router-dom';

const Success = (props) => {
  const goHome = () => {
    props.history.push('./');
  };
  return (
    <>
      <div className="alert alert-success text-center">
        <h1>Congratulations!!! Your application is successful</h1>
      </div>
      <div className="text-center">
        <button type="button" onClick={goHome} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default withRouter(Success);
