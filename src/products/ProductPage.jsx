import React from "react";
import { Logo } from "../assets/images";
import { MenuIcon, SearchIcon, FilterIcon } from "../assets/icons";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import httpClient from "../httpClient";
import Loading from "../utils/Loading";

function ProductsPage() {
  const [products, setProducts] = useState(undefined);
  const [loading, setLoading] = useState(true);

  async function getOffers() {
    setLoading(true);
    const { data } = await httpClient.get("/offers");
    setLoading(false);
    setProducts(data.data);
  }

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <>
      <div className="flex items-baseline justify-between px-4 py-3 bg-gray-900">
        <Logo className="h-8 w-auto" />
        <button
          type="button"
          className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white"
        >
          <MenuIcon className="h-6 w-6 fill-current" />
        </button>
      </div>
      <div>
        <div className="bg-gray-800">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="relative max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-6 w-6 fill-current text-gray-600" />
              </div>
              <input
                className="block w-full bg-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
                placeholder="Search by keywords"
              />
            </div>
            <button
              type="button"
              className="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 py-1 bg-gray-700"
            >
              <FilterIcon className="h-6 w-6 fill-current text-gray-500" />
              <span className="ml-1 text-white font-medium">Filters</span>
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
      {!loading && products && (
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductsPage;
