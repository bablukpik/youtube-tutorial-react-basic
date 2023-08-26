import { useDeferredValue } from "react";

interface Props {
  products: string[];
}

function ProductList({ products }: Props) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
