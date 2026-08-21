"use client";

import { useState } from "react";

const customers = [
  {
    id: "#001",
    name: "John Doe",
    email: "john@gmail.com",
    orders: 12,
    spent: 850,
    status: "Active",
  },
  {
    id: "#002",
    name: "Ahmed Ali",
    email: "ahmed@gmail.com",
    orders: 8,
    spent: 420,
    status: "Active",
  },
  {
    id: "#003",
    name: "Sara Smith",
    email: "sara@gmail.com",
    orders: 15,
    spent: 1240,
    status: "Active",
  },
  {
    id: "#004",
    name: "Michael Brown",
    email: "michael@gmail.com",
    orders: 3,
    spent: 120,
    status: "Inactive",
  },
  {
    id: "#005",
    name: "Hana Bekele",
    email: "hana@gmail.com",
    orders: 21,
    spent: 1850,
    status: "Active",
  },
];

export default function Customer() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || customer.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="ml-[20%] w-[80%] mt-15 min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Customers
          </h1>


        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          + Add Customer
        </button>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Customers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            1,248
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Customers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            1,102
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            New Customers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            86
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            VIP Customers
          </p>

          <h2 className="mt-2 text-2xl font-bold text-purple-600">
            42
          </h2>
        </div>

      </div>

      {/* Customers container */}
      <div className="w-full rounded-xl bg-white shadow-sm">

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 border-b p-5 md:flex-row md:items-center md:justify-between">

          {/* Search */}
          <div className="relative w-full md:w-96">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Filter */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500"
          >
            <option value="All">All Customers</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>
              <tr className="border-b bg-gray-50 text-left text-sm text-gray-500">

                <th className="px-6 py-4">
                  Customer
                </th>

                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Orders
                </th>

                <th className="px-6 py-4">
                  Total Spent
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
              {filteredCustomers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  {/* Customer */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium text-gray-900">
                          {customer.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {customer.id}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {customer.email}
                  </td>

                  {/* Orders */}
                  <td className="px-6 py-4 font-medium">
                    {customer.orders}
                  </td>

                  {/* Spent */}
                  <td className="px-6 py-4 font-medium">
                    ${customer.spent.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {customer.status}
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
        {filteredCustomers.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No customers found.
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col gap-4 border-t p-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            Showing {filteredCustomers.length} of{" "}
            {customers.length} customers
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