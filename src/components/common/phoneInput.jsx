import React, { forwardRef } from 'react';

const PhoneInput = ({ name }, ref) => (
  <div className="form-group">
    <label htmlFor="firstName">Phone Number</label>
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">
          <i className="fa fa-phone-square" aria-hidden="true"></i>
        </span>
      </div>
      <input type="tel" name={name} className="form-control" ref={ref} placeholder="Phone number." />
    </div>
  </div>
);

export default forwardRef(PhoneInput);
