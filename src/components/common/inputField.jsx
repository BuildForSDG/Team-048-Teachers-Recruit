import React, { forwardRef } from 'react';

const InputField = ({ name, label, text }, ref) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input type={text} id={name} name={name} ref={ref} className="form-control" placeholder={name} />
  </div>
);

export default forwardRef(InputField);
