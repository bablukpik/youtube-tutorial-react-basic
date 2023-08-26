interface Props {
  products: string[];
}

function ProductList({ products }: Props) {
  // useDeferred is alternative to useTransition hook
  // const deferredProducts = useDeferredValue(products);
  const deferredProducts = products;
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
