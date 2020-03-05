import React from "react";

function ProductCard({ product }) {
  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD"
  // });

  // const price = formatter.format(product.attributes.price);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src={product.attributes.image}
        alt=""
      />
      <div className="px-6 py-4 h-32">
        <div className="font-bold text-xl mb-2">{product.attributes.name}</div>
        <p className="text-gray-700 text-base">
          {product.attributes.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #computers
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
