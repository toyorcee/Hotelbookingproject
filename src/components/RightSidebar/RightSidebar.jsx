import React from "react";
import "./RightSidebar.css";
import jfkmap from "../../assets/jfkmap.png";
import { Button } from "flowbite-react";

export default function RightSidebar() {
  return (
    <section className="container bg-[#425C5A] p-4 rounded-md shadow-md text-white h-full">
      <div className="flex bif mx-auto px-4">
        <div className="flex flex-col">
          <p>FROM</p>
          <p className="text-2xl">JFK</p>
        </div>
        <div className="ml-auto mt-8">NON-STOP</div>
        <div className="flex flex-col ml-auto">
          <p>TO</p>
          <p className="text-2xl">BOM</p>
        </div>
      </div>
      <div className="mt-5">
        <img src={jfkmap} alt="" />
      </div>
      <div className="bg-[#3D5654]">
        <div className="flex">
          <div className="flex w-full space-x-0 p-2 rounded-full bg-[#3D5654]">
            <button className="bg-[#C99C33] text-xs text-white py-2 px-4 rounded-full font-bold flex-grow">
              NON STOP
            </button>
            <button className="text-white py-2 px-4 rounded-full font-bold flex-grow">
              ONE STOP
            </button>
            <button className="text-white py-2 px-4 rounded-full font-bold flex-grow">
              MORE STOP
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2 ml-4">Price</h3>
          <div className="flex justify-between items-center">
            <Button
              gradientDuoTone="greenToyellow"
              type="submit"
            >
              $500
            </Button>
            <input
              type="range"
              min="500"
              max="2500"
              className="mx-2 cursor-pointer"
            />
            <span>$2500</span>
          </div>
        </div>
      </div>
    </section>
  );
}
