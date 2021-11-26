import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

export const options = {
  responsive: true,
};

export const barData = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [4.5, 2, 3.5, 3, 1],
      backgroundColor: "rgba(251, 133, 0)",
    },
  ],
};

const SectionOne = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full">
      {/* Sales */}
      <div className="flex flex-col justify-evenly shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* name */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-medium">Sales</h4>
          <p className="text-base text-gray-500">Monthly Goal</p>
        </div>
        {/* chart */}
        <div className="space-y-2">
          {/* percentage */}
          <div className="flex justify-between items-end">
            <h5 className="text-5xl font-semibold">98.1%</h5>
            <p className="text-sm text-green-400">+6.9%</p>
          </div>
          {/* progress bar */}
          <div className="relative pt-1">
            <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-200">
              <div className="w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
            </div>
          </div>
        </div>
        {/* content name */}
        <p className="text-base text-gray-500">Yealy Goal</p>
      </div>

      {/* Revenue */}
      <div className="flex flex-col justify-evenly shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* name */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-medium">Revenue</h4>
          <p className="text-base text-gray-500">Total Profit</p>
        </div>
        {/* chart */}
        <div className="space-y-2">
          {/* percentage */}
          <div className="flex justify-between items-end">
            <h5 className="text-5xl font-semibold">$13,893</h5>
            <p className="text-sm text-yellow-700">+11.3%</p>
          </div>
          {/* bar chart */}
          <div className="h-1/4">
            <Bar options={options} data={barData} />
          </div>
        </div>
        {/* content name */}
        <p className="text-base text-gray-500">Yealy Goal</p>
      </div>

      {/* clients */}
      <div className="flex flex-col justify-evenly shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* name */}
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-medium">Clients</h4>
          <p className="text-base text-gray-500">Subscribed</p>
        </div>
        {/* chart */}
        <div className="space-y-2">
          {/* percentage */}
          <div className="flex justify-between items-end">
            <h5 className="text-5xl font-medium">1,232</h5>
            <p className="text-sm text-green-400">+3.2%</p>
          </div>
          {/* progress bar */}
          <div className="relative pt-1">
            <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-200">
              <div className="w-3/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"></div>
            </div>
          </div>
        </div>

        {/* content name */}
        <p className="text-base text-gray-500">Yealy Goal</p>
      </div>
    </div>
  );
};

export default SectionOne;
