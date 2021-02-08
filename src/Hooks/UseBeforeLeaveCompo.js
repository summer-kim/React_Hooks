import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => {
      document.removeEventListener('mouseleave', handle);
    };
  }, []);
};
const UseBeforeLeaveCompo = () => {
  const onBefore = () => alert('Are you sure you want to leave?');
  useBeforeLeave(onBefore);
  return <div></div>;
};

export default UseBeforeLeaveCompo;
