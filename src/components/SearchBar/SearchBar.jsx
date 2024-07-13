import React from "react";
import "./SearchBar.css";
import { GoArrowSwitch } from "react-icons/go";
import { IoLocationSharp, IoCalendarOutline } from "react-icons/io5";
// import { Button } from "flowbite-react";

export default function SearchBar() {
  return (
    <section className="container mx-auto p-1 w-[full]">
      <div className="bg-white p-4 rounded-3xl shadow-md flex flex-col justify-between items-center gap-3">
        <div className="flex space-x-4 rounded-3xl w-full items-center">
          <div className="flex items-center justify-center border p-1 rounded-full bg-white">
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A]" />
              <input
                type="text"
                placeholder="New York (JFK)"
                className="border-none outline-none flex-grow p-1 rounded-full"
              />
            </div>
            <div className="flex items-center justify-center mx-2 bg-[#425C5A] rounded-full p-1">
              <GoArrowSwitch className="text-white" />
            </div>
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A]" />
              <input
                type="text"
                placeholder="Mumbai (BOM)"
                className="border-none outline-none flex-grow p-1 rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center border p-4 rounded-full w-1/4 bg-white">
            <IoCalendarOutline className="text-[#425C5A] mr-2" />
            <span>29 JULY 2019</span>
          </div>
          <input
            type="number"
            placeholder="2 TRAVELLER"
            className="border p-2 rounded-full w-1/4"
          />
        </div>
        <div className="flex space-x-4 rounded-3xl w-full items-center">
          <div className="flex items-center justify-center border p-1 rounded-full bg-white">
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A]" />
              <input
                type="text"
                placeholder="New York (JFK)"
                className="border-none outline-none flex-grow p-1 rounded-full"
              />
            </div>
            <div className="flex items-center justify-center mx-2 bg-[#425C5A] rounded-full p-1">
              <GoArrowSwitch className="text-white" />
            </div>
            <div className="flex items-center w-1/2">
              <IoLocationSharp className="text-[#425C5A]" />
              <input
                type="text"
                placeholder="Mumbai (BOM)"
                className="border-none outline-none flex-grow p-1 rounded-full"
              />
            </div>
          </div>
          <div className="flex items-center border p-4 rounded-full w-1/4 bg-white">
            <IoCalendarOutline className="text-[#425C5A] mr-2" />
            <span>29 JULY 2019</span>
          </div>
          <input
            type="number"
            placeholder="2 TRAVELLER"
            className="border p-2 rounded-full w-1/4"
          />
        </div>
      </div>
    </section>
  );
}
