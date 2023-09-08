import { ComponentType } from "react";
import { ItemType } from ".";

interface Props {
  data: ItemType[];
  isLoading: boolean;
}

const withConditionalFeedback = (Component: ComponentType<Props>) => (props: Props ) => {
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;
  return <Component {...props} />;
};

export default withConditionalFeedback;
