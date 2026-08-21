"use client";

const orders = [
  {
    id: "#1001",
    customer: "John",
    product: "Nike Air Max",
    amount: 120,
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Ahmed",
    product: "Black Hat",
    amount: 80,
    status: "Pending",
  },
{
    id: "#1003",
    customer: "Sara",
    product: "Leather Bag",
    amount: 250,
    status: "Processing",
  },

];

export default function RecentOrders() {
  return (
    <div className="rounded-xl  p-5 ">

      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Recent Orders
          </h2>

        </div>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">

          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-medium">
                  {order.id}
                </td>

                <td className="px-4 py-2">
                  {order.customer}
                </td>

                <td className="px-4 py-2 text-gray-600">
                  {order.product}
                </td>

                <td className="px-4 py-2 font-medium">
                  ${order.amount}
                </td>

                <td className="px-4 py-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}