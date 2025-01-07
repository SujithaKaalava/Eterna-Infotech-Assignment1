import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock Data for Bar and Pie Charts
const barData = [
  { name: "Jan", profit: 50, expense: 100 },
  { name: "Feb", profit: 60, expense: 110 },
  { name: "Mar", profit: 70, expense: 120 },
  { name: "Apr", profit: 40, expense: 100 },
  { name: "May", profit: 60, expense: 110 },
  { name: "Jun", profit: 80, expense: 130 },
  { name: "Jul", profit: 50, expense: 90 },
  { name: "Aug", profit: 90, expense: 130 },
  { name: "Sep", profit: 70, expense: 120 },
  { name: "Oct", profit: 80, expense: 140 },
];

const pieData = [
  { name: "Laptop", value: 40 },
  { name: "Mobile", value: 30 },
  { name: "Electronics", value: 30 },
];

// Updated Colors
const COLORS = ["#3B82F6", "#4F46E5", "#BFDBFE"]; // Laptop (blue-500), Mobile (indigo-800), Electronics (blue-200)

const InfoSection = () => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 flex flex-col justify-center relative max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-center">
        Welcome back!<br />
        Please sign in to your{" "}
        <br/>
        <a href="#" className="underline hover:no-underline">
          Filuick Pay
        </a>{" "}
        Account
      </h2>

      <p className="text-sm mb-6 text-center">
        Lorem ipsum dolor sit amet consectetur. Facilisi neque lectus turpis id
        tincidunt eget. Sagittis id et cursus porttitor.
      </p>

      {/* Chart Container */}
      <div className="bg-white p-4 rounded-lg text-gray-800 shadow-md relative width-90%">
        {/* Bar Chart */}
        <h3 className="font-semibold mb-4">Sales Report</h3>
        <div className="relative">
          <ResponsiveContainer width="90%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="profit" fill="#3B82F6" name="Profit" />
              <Bar dataKey="expense" fill="#BFDBFE" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>

          {/* Pie Chart Overlay */}
          <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-md p-2 w-32 h-32 flex flex-col items-center justify-center">
            <h4 className="text-center font-semibold text-sm mb-1">
              Popular Categories
            </h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="text-xs text-center mt-1">
              <p>
                <span className="text-blue-500 font-bold">Laptop</span>,{" "}
                <span className="font-bold text-indigo-800">Mobile</span>,{" "}
                <span className="text-blue-200 font-bold">Electronics</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center font-bold">_ _ _</div>
    </div>
  );
};

export default InfoSection;
