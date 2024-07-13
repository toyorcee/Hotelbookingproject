import React from "react";
import "./Home.css";
import Side from "../../components/Sidebar/sidebar";
import FlightPage from "../FlightPage/FlightPage";

export default function Home() {
  return (
    <section className="container flex min-h-screen mx-8 p-4 rounded">
      <Side />
      <main className="flex-1 p-4 overflow-y-auto">
        <FlightPage />
      </main>
    </section>
  );
}
