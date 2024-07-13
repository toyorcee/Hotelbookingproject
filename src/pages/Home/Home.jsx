import React from "react";
import "./Home.css";
import Side from "../../components/Sidebar/sidebar";
import FlightPage from "../FlightPage/FlightPage";

export default function Home() {
  return (
    <section className="container home flex flex-1 rounded bg-[#E1ECEB]">
      <Side />
      <main className="flex-1 overflow-y-auto">
        <FlightPage />
      </main>
    </section>
  );
}
