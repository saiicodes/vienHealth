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
  labels: ["active"],
  datasets: [
    {
      data: [3, 7],
      backgroundColor: ["rgba(255, 183, 3)", "rgba(173, 181, 189)"],
      borderColor: ["rgba(255, 183, 3)", "rgba(173, 181, 189)"],
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
      label: "Clients",
      data: [1, 5, 6, 7, 8, 7.3, 2.2, 10],
      borderColor: "rgb(6, 214, 160)",
      backgroundColor: "rgba(6, 214, 160)",
    },
  ],
};

const SectionThree = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full">
      {/*  */}
      <div className="col-span-2 flex flex-col shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* header */}
        <div className="flex justify-between items-center border-b">
          <h4 className="text-2xl font-medium mb-2">Daily Active Clients</h4>
          <DotsHorizontalIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
        </div>

        {/* chart */}
        <div>
          <Line data={lineData} options={options2} />
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col shadow-md rounded-md bg-white w-auto p-5 space-y-4">
        {/* header */}
        <div className="flex justify-between items-center border-b">
          <div className="flex flex-col mb-2">
            <h4 className="text-2xl font-medium">User Onboarding</h4>
            <p className="text-base text-gray-500">Goal: 8000 onboarding</p>
          </div>
          {/* icon */}
          <DotsHorizontalIcon className="flex-shrink-0 h-6 w-6 text-gray-600" />
        </div>
        {/* chart */}
        <div>
          <Doughnut data={doughnutData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
