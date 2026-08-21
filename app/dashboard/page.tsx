"use client";
import Image from "next/image";
import RecentOrders from "@/app/components/RecentOrders"; 
import customer from "../assets/dashboard/group.png"
import order from "../assets/dashboard/order.png"
import product from "../assets/dashboard/new-product.png"
import revenue from "../assets/dashboard/shopping.png"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 12000, orders: 245, name: "Clothing", value: 400  },
  { month: "Feb", sales: 15000, orders: 450, name: "Shoes", value: 300  },
  { month: "Mar", sales: 13500, orders: 250, name: "Accessories", value: 200  },
  { month: "Apr", sales: 18000, orders: 345, name: "Bags", value: 150 },
  { month: "May", sales: 22000, orders: 445, name: "Hat", value: 10  },
  { month: "Jun", sales: 25000, orders: 145, name: "earrings", value: 250  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000", "#800080"];
export default function Dashboard (){
    return(
        <div className=" bg-gray-50 w-4/5 fixed top-15 right-0 bottom-0 flex  flex-col justify-center items-center">
            <div className="w-full h-30 flex justify-evenly items-center">
                <div className=" w-60 h-20 shadow-xl bg-white flex justify-evenly items-center rounded-xl">
                    <div>
                        <Image className="w-10 h-10" src={product} alt="" />
                    </div>
                    <div>
                        <span>Products</span>
                    </div>                
                </div>
                <div className=" w-60 h-20 shadow-xl bg-white flex justify-evenly items-center rounded-xl">
                    <div>
                        <Image className="w-10 h-10" src={customer} alt="" />
                    </div>
                    <div>
                        Customer
                    </div>
                </div>
                <div className=" w-60 h-20 shadow-xl bg-white flex justify-evenly items-center rounded-xl">
                    <div>
                        <Image className="w-10 h-10" src={order} alt="" />
                    </div>
                    <div>
                        Order
                    </div>
                </div>
                <div className=" w-60 h-20 shadow-xl bg-white flex justify-evenly items-center rounded-xl">
                    <div>
                        <Image className="w-10 h-10" src={revenue} alt="" />
                    </div>
                    <div>
                        Revenue
                    </div>
                </div>
            </div>

            <div className=" w-full h-70 flex justify-evenly items-center">
                <div className="w-165 h-60 bg-white shadow-xl rounded-xl flex flex-col justify-between items-start ">
                    <h2 className="mb-1 text-xl font-semibold w-full pl-5 py-2">Sales Overview</h2>
                    {/* <div className="w-full  flex justify-center items-center"> */}
                        <ResponsiveContainer className="px-5" width="100%" height="80%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="month" />

                                <YAxis />

                                <Tooltip />

                                <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#2563eb"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    {/* </div> */}

                </div>

                <div className="w-100 h-60 bg-white shadow-xl rounded-xl">
                    <h2 className="mb-1 text-xl font-semibold px-5 py-2">Orders</h2>
                    <ResponsiveContainer className="px-5 pr-7" width="100%" height="80%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                        dataKey="orders"
                        fill="#2563eb"
                        radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className=" w-full h-70 flex justify-evenly items-center">
                <div className="w-165 h-60 bg-white shadow-xl rounded-xl">
                    <RecentOrders />
                </div>

                <div className="w-100 h-60 bg-white shadow-xl rounded-xl flex justify-center items-center flex-col">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            label
                            >
                            {data.map((entry, index) => (
                                <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                            </Pie>

                            <Tooltip />

                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}