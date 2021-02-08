import React, { useEffect, useRef } from 'react';

const useFadein = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
const UseFadeinCompo = () => {
  const fadein = useFadein(2, 3);
  return <div {...fadein}>Fade in</div>;
};

export default UseFadeinCompo;
