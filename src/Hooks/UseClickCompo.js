import React, { useRef, useEffect } from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  if (typeof onClick !== 'function') {
    return;
  }
  return element;
};
const UseClickCompo = () => {
  const getRef = useClick(() => console.log('click'));
  return (
    <div>
      <h1 ref={getRef}>Target</h1>
    </div>
  );
};

export default UseClickCompo;
