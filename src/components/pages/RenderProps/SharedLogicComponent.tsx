import React, { ReactNode } from "react";

interface Props {
  render: (param: string) => ReactNode;
}

const SharedLogicComponent = ({ render }: Props) => {
  const sharedData = "Shared data from Render Props Component";

  // Perform any shared logic here
  return <>{render(sharedData)}</>;
};

export default SharedLogicComponent;
