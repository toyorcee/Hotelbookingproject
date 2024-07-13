import React from "react";
import "./TopBar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center bg-transparent p-4 rounded-md">
      <div className="font-semibold text-lg">Result (25)</div>
      <div className="flex gap-3">
        <button
          className="bg-[#FFF] text-[#425C5A] text-xs font-semibold py-3 px-9 rounded-full mt-2"
          style={{ fontWeight: "bold" }}
        >
          FILTER
        </button>
        <button
          className="bg-[#FFF] flex text-[#425C5A] text-xs font-semibold py-4 px-9 rounded-full"
          style={{ fontWeight: "bold" }}
        >
          <span className="mt-2">TICKET OF CLASS</span>
          <RiArrowDropDownLine size={30} />
        </button>
      </div>
    </div>
  );
}
