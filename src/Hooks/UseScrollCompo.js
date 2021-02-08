import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [scroll, setscroll] = useState({
    x: 0,
    y: 0,
  });
  const handle = () => {
    setscroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handle);
    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);
  return scroll;
};

const UseScrollCompo = () => {
  const { x, y } = useScroll();
  return (
    <div style={{ height: '1000vh' }}>
      <h1
        style={{
          position: 'fixed',
          color: y > 300 ? 'blue' : 'red',
          transition: 'color 2s',
        }}
      >
        Scroll State
      </h1>
    </div>
  );
};

export default UseScrollCompo;
