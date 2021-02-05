import React, { useState } from 'react';

const usePutIn = (initialValue, validator = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let result = true;
    if (typeof validator === 'function') {
      result = validator(value);
    }
    result && setValue(value);
  };
  return { value, onChange };
};

const UsePutIn = () => {
  const set = usePutIn('summer', (value) => !value.includes('@'));
  return (
    <div>
      <input placeholder='Enter your name' {...set} />
    </div>
  );
};

export default UsePutIn;
