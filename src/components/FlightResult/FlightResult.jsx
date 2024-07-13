import React from "react";
import "./FlightResult.css";
import emirateslogo from "../../assets/emiratess.png";
import lufthansalogo from "../../assets/Lufthansa.png";
import Qatarlogo from "../../assets/Qatar.png";
import { Button } from "flowbite-react";

export default function FlightResult() {
  const flights = [
    {
      airline: "Emirates",
      from: "JFK",
      to: "BOM",
      time1: "13:00",
      time2: "14:20",
      duration: "11H 20M",
      price: "$1572",
      logo: emirateslogo,
    },
    {
      airline: "Qatar Airways",
      from: "JFK",
      to: "BOM",
      time1: "13:00",
      time2: "14:20",
      duration: "11H 20M",
      price: "$2072",
      logo: Qatarlogo,
    },
    {
      airline: "Lufthansa",
      from: "JFK",
      to: "BOM",
      time1: "13:00",
      time2: "14:20",
      duration: "11H 20M",
      price: "$1872",
      logo: lufthansalogo,
    },
    {
      airline: "Emirates",
      from: "JFK",
      to: "BOM",
      time1: "13:00",
      time2: "14:20",
      duration: "11H 20M",
      price: "$1872",
      logo: emirateslogo,
    },
  ];
  return (
    <section className="bg-white p-4 rounded-md shadow-md flex-1 overflow-y-auto max-h-[70vh] text-[#004225]">
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 items-center p-4 mb-1 border-b rounded-md"
          >
            <div className="col-span-1 flex justify-center">
              <img src={flight.logo} alt={flight.airline} className="h-17" />
            </div>
            <div className="col-span-1 text-center">
              <p className="font-semibold">{flight.from}</p>
              <p className="text-sm text-[#004225]">{flight.time1}</p>
            </div>
            <div className="col-span-1 text-center">
              <p className="font-semibold">{flight.airline}</p>
              <p className="text-sm text-[#C99C33]">{flight.duration}</p>
              <p className="text-sm text-[#004225]">NON-STOP</p>
            </div>
            <div className="col-span-1 text-center">
              <p className="text-sm text-[#004225]">{flight.to}</p>
              <p className="text-sm text-[#004225]">{flight.time2}</p>
            </div>
            <div className="col-span-1 text-right">
              <p className="font-semibold">{flight.price}</p>
              <Button
                size="sm"
                color="success"
                pill
                className="bg-[#C99C33] text-white"
                style={{ fontSize: "6px" }}
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
