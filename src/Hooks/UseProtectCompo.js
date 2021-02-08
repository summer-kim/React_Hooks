import React from 'react';

const useProtect = () => {
  const listner = (e) => {
    e.preventDefault();
    e.returnValue = ' ';
  };
  const protect = () => window.addEventListener('beforeunload', listner);
  const unprotect = () => window.removeEventListener('beforeunload', listner);

  return { protect, unprotect };
};

const UseProtectCompo = () => {
  const { protect, unprotect } = useProtect();
  return (
    <div>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>unProtect</button>
    </div>
  );
};

export default UseProtectCompo;
