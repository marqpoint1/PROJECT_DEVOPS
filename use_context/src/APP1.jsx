

import React, { createContext, useState } from 'react';
import CHILDA1 from './CHILDA1';

const userContext = createContext();

const APP1 = () => {
  const [count, setCount] = useState(500);

  return (
    <div>
      <userContext.Provider value={count}>
        <CHILDA1 />
      </userContext.Provider>
    </div>
  );
};

export default APP1;
export { userContext };
