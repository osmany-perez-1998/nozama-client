import React from "react";
import { StarIcon } from "../assets/icons";

function ProductCard({ product }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  const price = formatter.format(product.price);

  return (
    <div>
      <div className="relative pb-5/6">
        <img
          className="absolute inset-0 h-full w-full rounded-lg shadow-md object-cover"
          src={product.image}
          alt=""
        />
      </div>
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="flex items-baseline">
            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
              {/* {{ product.beds }} {{ product.beds === 1 ? 'bed' : 'beds' }} &bull; {{ product.baths }} {{ product.baths === 1 ? 'bath' : 'baths' }} */}
            </div>
          </div>
          <h4 className="mt-1 text-gray-900 font-semibold text-lg">
            {product.name}
          </h4>
          <div className="mt-1">
            <span className="text-gray-900">{price}</span>
            <span className="ml-1 text-sm text-gray-600">/wk</span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-600">
            <StarIcon className="w-4 h-4 pb-1 fill-current" />
            <span className="ml-2">{product.reviews} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
