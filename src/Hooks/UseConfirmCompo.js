import React from 'react';

const useConfirm = (message = '', callback, rejection) => {
  if (typeof callback !== 'function' || typeof rejection !== 'function') {
    return;
  }
  const process = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return process;
};
const UseConfirmCompo = () => {
  const deleteWord = () => console.log('deleting..');
  const abort = () => console.log('canceled..');
  const final = useConfirm('Are you sure?', deleteWord, abort);
  return (
    <div>
      <button onClick={final}>Delete</button>
    </div>
  );
};

export default UseConfirmCompo;
