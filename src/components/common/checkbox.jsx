import React, { forwardRef } from 'react';

const CheckboxField = ({ name, label }, ref) => (
  <div className="form-check form-check-inline mb-2">
    <input className="form-check-input" type="checkbox" name={name} ref={ref} id={name} value={name} />
    <label className="form-check-label" htmlFor={name}>
      {label}
    </label>
  </div>
);

export default forwardRef(CheckboxField);
