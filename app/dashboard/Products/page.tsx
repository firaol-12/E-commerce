"use client";

import { useState } from "react";

const products = [
  {
    id: "#P001",
    name: "Nike Air Max",
    category: "Shoes",
    price: 120,
    stock: 45,
    status: "In Stock",
  },
  {
    id: "#P002",
    name: "Classic T-Shirt",
    category: "Clothing",
    price: 35,
    stock: 12,
    status: "Low Stock",
  },
  {
    id: "#P003",
    name: "Leather Bag",
    category: "Bags",
    price: 80,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "#P004",
    name: "Classic Watch",
    category: "Accessories",
    price: 180,
    stock: 25,
    status: "In Stock",
  },
  {
    id: "#P005",
    name: "Running Shoes",
    category: "Shoes",
    price: 150,
    stock: 7,
    status: "Low Stock",
  },
  {
    id: "#P006",
    name: "Black Hat",
    category: "Accessories",
    price: 25,
    stock: 60,
    status: "In Stock",
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [stockStatus, setStockStatus] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesStock =
      stockStatus === "All" || product.status === stockStatus;

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="ml-[20%] w-[80%] mt-15 min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your products and inventory
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          + Add Product
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Products
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            356
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            In Stock
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            310
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Low Stock
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-600">
            32
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Out of Stock
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-600">
            14
          </h2>
        </div>

      </div>

      {/* Products container */}
      <div className="w-full rounded-xl bg-white shadow-sm">

        {/* Search and filters */}
        <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:w-96">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Shoes">Shoes</option>
              <option value="Clothing">Clothing</option>
              <option value="Bags">Bags</option>
              <option value="Accessories">Accessories</option>
            </select>

            <select
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
            >
              <option value="All">All Stock</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>

          </div>

        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>
              <tr className="border-b bg-gray-50 text-left text-sm text-gray-500">

                <th className="px-6 py-4">
                  Product
                </th>

                <th className="px-6 py-4">
                  Category
                </th>

                <th className="px-6 py-4">
                  Price
                </th>

                <th className="px-6 py-4">
                  Stock
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredProducts.map((product) => (

                <tr
                  key={product.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  {/* Product */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-semibold text-blue-600">
                        {product.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium text-gray-900">
                          {product.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {product.id}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 font-medium">
                    ${product.price.toLocaleString()}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4 font-medium">
                    {product.stock}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : product.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-center">

                    <button className="rounded-lg px-3 py-1 text-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                      ⋮
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No products found.
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col gap-4 border-t p-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          <div className="flex gap-2">

            <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
              Previous
            </button>

            <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white">
              1
            </button>

            <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}