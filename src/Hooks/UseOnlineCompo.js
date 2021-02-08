import React, { useState, useEffect } from 'react';

const useOnline = (onChange) => {
  const [state, setState] = useState(navigator.onLine);
  const handle = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setState(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handle);
    window.addEventListener('offline', handle);

    return () => {
      window.removeEventListener('online', handle);
      window.removeEventListener('offline', handle);
    };
  }, []);
  return state;
};
const UseOnline = () => {
  const onChangeFunct = (online) => {
    online ? console.log('online') : console.log('offline');
  };
  const display = useOnline(onChangeFunct);
  return <div>{display ? 'Connected' : 'Disconnected'}</div>;
};

export default UseOnline;
