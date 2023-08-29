import React, { ChangeEvent, useState } from "react";
import { useTransition } from "react";
import ProductList from "./ProductList";

function generateProducts() {
  // const products = [];
  // for (let i = 0; i < 10000; i++) {
  //   products.push(`Product ${i+1}`);
  // }
  const products = Array.from({ length: 10000 }, (_, i) => `Product ${i + 1}`);
  return products;
}

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: ChangeEvent<HTMLInputElement>) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
    // setFilterTerm(event.target.value);
  }

  return (
    <>
      <h1>Use Transition Hook</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase count
      </button>
      <br />
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{ color: "green" }}>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </>
  );
}

export default UseTransition;
