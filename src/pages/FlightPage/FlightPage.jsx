import React from "react";
import "./FlightPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightResult from "../../components/FlightResult/FlightResult";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import TopBar from "../../components/TopBar/TopBar";

export default function FlightPage() {
  return (
    <section className="container mx-auto min-h-screen p-4">
      <SearchBar />
      <div className="mt-4">
        <TopBar />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 flex flex-col">
          <FlightResult />
        </div>
        <div className="col-span-1">
          <RightSidebar />
        </div>
      </div>
    </section>
  );
}
