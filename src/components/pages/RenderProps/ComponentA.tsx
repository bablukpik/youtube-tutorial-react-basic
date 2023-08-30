import React from 'react';
import SharedLogicComponent from './SharedLogicComponent';

const ComponentA = () => {
  return (
    <SharedLogicComponent
      render={(sharedData) => (
        <div>
          <p>Component A</p>
          <p>{sharedData}</p>
        </div>
      )}
    />
  );
};

export default ComponentA;
