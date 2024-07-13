import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center bg-transparent p-4 rounded-md">
      <div className="font-semibold text-lg">Result (25)</div>
      <div className="flex gap-4">
        <button className="border p-2 rounded-md bg-gray-100">Filter</button>
        <button className="border p-2 rounded-md bg-gray-100">
          Ticket of Class
        </button>
      </div>
    </div>
  );
}
