import React from "react";
import Product from "./Product";

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto  sm:mt-0 mt-12">
      {products.slice(0, 4).map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          priority={true}
        />
      ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="middle banner"
      />

<div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            priority={true}
          />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            priority={true}
          />
        ))}
    </div>
  );
}
