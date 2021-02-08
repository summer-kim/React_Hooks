import React, { useEffect, useState } from 'react';

const UseEffectCompo = () => {
  const sayHello = () => {
    console.log('Hello');
  };
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    sayHello();
  });
  //useEffect with empty dependency
  //works as componentDidMount, componentWillUnmount, componentDidUpdate which is excuted when you click button

  //useEffect with dependency(non-empty second parameter)
  //works as componentDidMount, componentWillUpdate
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
    </div>
  );
};

export default UseEffectCompo;
