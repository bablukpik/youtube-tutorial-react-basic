import SharedLogicComponent from "./SharedLogicComponent";

const ComponentB = () => {
  return (
    <SharedLogicComponent
      render={(sharedData) => (
        <div>
          <p>Component B</p>
          <p>{sharedData}</p>
        </div>
      )}
    />
  );
};

export default ComponentB;