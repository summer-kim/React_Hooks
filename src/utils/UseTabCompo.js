import React, { useState } from 'react';

const contents = [
  {
    title: 'How to be fluent in English',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex vero earum illo, rerum unde ratione animi exercitationem consequatur officia.',
  },
  {
    title: 'How to make puppy happy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex vero earum illo, rerum unde ratione animi exercitationem consequatur officia.',
  },
];

const useTab = (initialTab, wholeTab) => {
  const [currentTab, setCurrent] = useState(initialTab);
  if (!wholeTab || !Array.isArray(wholeTab)) {
    return;
  }
  return {
    currentItem: wholeTab[currentTab],
    onClick: setCurrent,
  };
};

const UseTabCompo = () => {
  const { currentItem, onClick } = useTab(0, contents);
  return (
    <div>
      <div>
        {contents.map((content, idx) => (
          <button onClick={() => onClick(idx)} key={idx}>
            {content.title}
          </button>
        ))}
      </div>
      <h1 id='title'>{currentItem.title}</h1>
      <p id='description'>{currentItem.description}</p>
    </div>
  );
};

export default UseTabCompo;
