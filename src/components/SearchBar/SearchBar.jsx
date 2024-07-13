import React from "react";
import "./SearchBar.css";
import { GoArrowSwitch } from "react-icons/go";
import { IoLocationSharp, IoCalendarOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { PiArmchairFill } from "react-icons/pi";

export default function SearchBar() {
  return (
    <section className="container mx-auto p-1 w-[full]">
      <div className="bg-white p-4 rounded-3xl shadow-md flex flex-col justify-between items-center gap-2">
        <div className="flex space-x-8 rounded-3xl w-full items-center">
          <div className="justify-between flex items-center border p-1 rounded-full bg-white">
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A]" />
              <input
                type="text"
                placeholder="NEW YORK (JFK)"
                className="border-none outline-none flex-grow p-1 rounded-full"
                style={{ fontWeight: "bold" }}
              />
            </div>
            <div className="flex items-center justify-center mx-2 bg-[#425C5A] rounded-full p-1">
              <GoArrowSwitch className="text-white" />
            </div>
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A] ml-5px" />
              <input
                type="text"
                placeholder="MUMBAI (BOM)"
                className="border-none outline-none flex-grow p-1 rounded-full"
                style={{ fontWeight: "bold" }}
              />
            </div>
          </div>
          <button
            className="bg-[#E1ECEB] text-[#8B9E9C] text-xs font-semibold py-3.5 px-4 rounded-full flex gap-1"
            style={{ fontWeight: "bold" }}
          >
            <IoCalendarOutline className="mt-0.5" />
            29 JULY 2019
          </button>
          <button
            className="bg-[#E1ECEB] text-[#8B9E9C] text-xs font-semibold py-3.5 px-3.5 rounded-full flex gap-1"
            style={{ fontWeight: "bold" }}
          >
            <MdPerson className="mt-0.5" />2 TRAVELLER
          </button>
        </div>
        <div className="flex space-x-10 rounded-3xl w-full items-center">
          <div className="flex w-full space-x-0 p-2 rounded-full bg-gray-100">
            <button className="bg-[#425C5A] text-white py-2 px-4 rounded-full font-bold flex-grow">
              ONE WAY
            </button>
            <button className="text-[#425c5a] py-2 px-4 rounded-full font-bold flex-grow">
              ROUND TRIP
            </button>
            <button className="text-[#425c5a] py-2 px-4 rounded-full font-bold flex-grow">
              MULTI CITY
            </button>
          </div>
          <button
            className="bg-[#E1ECEB] text-[#8B9E9C] text-xs font-semibold py-2 px-8 rounded-full flex"
            style={{ fontWeight: "bold" }}
          >
            <PiArmchairFill size={25} className="mt-0.5" />
            FIRST CLASS
          </button>
          <button
            className="bg-[#C99C33] text-white text-xs font-semibold py-3 px-9 rounded-full"
            style={{ fontWeight: "bold" }}
          >
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}
