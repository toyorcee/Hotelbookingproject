import React from "react";
import "./RightSidebar.css";

export default function RightSidebar() {
  return (
    <div className="bg-[#425C5A] p-4 rounded-md shadow-md text-white h-full">
      <h2 className="text-xl font-bold mb-4">From JFK to BOM</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Non-Stop</span>
          <span>Duration: 11H 20M</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">One Stop</span>
          <span>Duration: 14H 45M</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">More Stops</span>
          <span>Duration: 19H 30M</span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Price Range</h3>
          <div className="flex justify-between items-center">
            <span>$500</span>
            <input type="range" min="500" max="2500" className="mx-2" />
            <span>$2500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
