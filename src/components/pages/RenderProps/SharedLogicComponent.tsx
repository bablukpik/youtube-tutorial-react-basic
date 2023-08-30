import React, { ReactNode } from "react";

interface Props {
  render: (param: string) => ReactNode;
}

const SharedLogicComponent = ({ render }: Props) => {
  const sharedData = "Shared data from logic";

  // Perform any shared logic here
  return <>{render(sharedData)}</>;
};

export default SharedLogicComponent;
