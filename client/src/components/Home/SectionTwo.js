import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

// Doughnut
ChartJS.register(ArcElement, Tooltip, Legend);

// Line
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Doughnut
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export const doughnutData = {
  labels: ["Invoiced", "Invoices"],
  datasets: [
    {
      data: [7, 3],
      backgroundColor: ["rgba(2, 48, 71)", "rgba(142, 202, 230)"],
      borderColor: ["rgba(2, 48, 71)", "rgba(142, 202, 230)"],
      borderWidth: 1,
    },
  ],
};

// Line
export const options2 = {
  responsive: true,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export const lineData = {
  labels,
  datasets: [
    {
      label: "Profit",
      data: [2, 5, 6, 3, 8, 4, 7, 9],
      borderColor: "rgb(58, 134, 255)",
      backgroundColor: "rgba(58, 134, 255)",
    },
  ],
};

const SectionTwo = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full">
      {/*  */}
      <div className="flex flex-col shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* header */}
        <div className="flex justify-between items-center border-b">
          <div className="flex flex-col mb-2">
            <h4 className="text-2xl font-medium">Total Sales</h4>
            <p className="text-base text-green-500">+$989.87</p>
          </div>
          {/* icon */}
          <DotsHorizontalIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
        </div>
        {/* chart */}
        <div>
          <Doughnut data={doughnutData} options={options} />
        </div>
      </div>

      {/*  */}
      <div className="col-span-2 flex flex-col shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* header */}
        <div className="flex justify-between items-center border-b">
          <h4 className="text-2xl font-medium mb-2">Daily Profits</h4>
          <DotsHorizontalIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
        </div>

        {/* chart */}
        <div>
          <Line data={lineData} options={options2} />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
