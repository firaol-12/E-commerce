"use client";

import { useState } from "react";

const orders = [
  {
    id: "#1001",
    customer: "John Doe",
    email: "john@gmail.com",
    products: "Nike Air Max",
    total: 120,
    payment: "Paid",
    status: "Completed",
    date: "Aug 19, 2026",
  },
  {
    id: "#1002",
    customer: "Ahmed Ali",
    email: "ahmed@gmail.com",
    products: "Black Hat",
    total: 80,
    payment: "Pending",
    status: "Pending",
    date: "Aug 18, 2026",
  },
  {
    id: "#1003",
    customer: "Sara Smith",
    email: "sara@gmail.com",
    products: "Leather Bag",
    total: 250,
    payment: "Paid",
    status: "Completed",
    date: "Aug 18, 2026",
  },
  {
    id: "#1004",
    customer: "Michael Brown",
    email: "michael@gmail.com",
    products: "Classic Watch",
    total: 180,
    payment: "Paid",
    status: "Processing",
    date: "Aug 17, 2026",
  },
  {
    id: "#1005",
    customer: "Hana Bekele",
    email: "hana@gmail.com",
    products: "Running Shoes",
    total: 150,
    payment: "Failed",
    status: "Cancelled",
    date: "Aug 16, 2026",
  },
  {
    id: "#1006",
    customer: "Daniel",
    email: "daniel@gmail.com",
    products: "T-Shirt",
    total: 65,
    payment: "Paid",
    status: "Completed",
    date: "Aug 15, 2026",
  },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="ml-[20%] w-[80%] mt-15 min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Orders
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage and track customer orders
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          Export Orders
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            1,248
          </h2>
        </div>

        {/* Completed */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            980
          </h2>
        </div>

        {/* Pending */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-600">
            180
          </h2>
        </div>

        {/* Cancelled */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Cancelled
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-600">
            88
          </h2>
        </div>

      </div>

      {/* Orders Container */}
      <div className="w-full rounded-xl bg-white shadow-sm">

        {/* Search + Filter */}
        <div className="flex flex-col gap-4 border-b p-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:w-96">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search order or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Status Filter */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
          >
            <option value="All">All Orders</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead>
              <tr className="border-b bg-gray-50 text-left text-sm text-gray-500">

                <th className="px-6 py-4">
                  Order
                </th>

                <th className="px-6 py-4">
                  Customer
                </th>

                <th className="px-6 py-4">
                  Product
                </th>

                <th className="px-6 py-4">
                  Total
                </th>

                <th className="px-6 py-4">
                  Payment
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4">
                  Date
                </th>

                <th className="px-6 py-4 text-center">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  {/* Order ID */}
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {order.id}
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">

                    <div>
                      <p className="font-medium text-gray-900">
                        {order.customer}
                      </p>

                      <p className="text-xs text-gray-400">
                        {order.email}
                      </p>
                    </div>

                  </td>

                  {/* Product */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.products}
                  </td>

                  {/* Total */}
                  <td className="px-6 py-4 font-medium">
                    ${order.total.toLocaleString()}
                  </td>

                  {/* Payment */}
                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.payment === "Paid"
                          ? "bg-green-100 text-green-700"
                          : order.payment === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.payment}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>

                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.date}
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

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No orders found.
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col gap-4 border-t p-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            Showing {filteredOrders.length} of {orders.length} orders
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