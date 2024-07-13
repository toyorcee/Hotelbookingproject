import React from "react";
import profile from "../../assets/bg.jpeg";
import "./sidebar.css";
import img1 from "../../assets/img4.png";
import img2 from "../../assets/img5.png";
import img3 from "../../assets/img6.png";
import img4 from "../../assets/img7.jpeg";
import map from "../../assets/yellow-world-map.webp";
import {
  IoHomeOutline,
  IoBarChartOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { TfiWallet } from "react-icons/tfi";
import { AiOutlinePieChart } from "react-icons/ai";

export default function Side() {
  const menuItems = [
    {
      name: "DASHBOARD",
      icon: <IoHomeOutline style={{ color: "#A68B3D" }} size={25} />,
      isActive: false,
    },
    {
      name: "FLIGHTS",
      icon: <PiAirplaneTiltLight style={{ color: "#A68B3D" }} size={25} />,
      isActive: true, 
    },
    {
      name: "WALLET",
      icon: <TfiWallet style={{ color: "#A68B3D" }} size={25} />,
      isActive: false,
    },
    {
      name: "REPORTS",
      icon: <IoBarChartOutline style={{ color: "#A68B3D" }} size={25} />,
      isActive: false,
    },
    {
      name: "STATISTICS",
      icon: <AiOutlinePieChart style={{ color: "#A68B3D" }} size={25} />,
      isActive: false,
    },
    {
      name: "SETTINGS",
      icon: <IoSettingsOutline style={{ color: "#A68B3D" }} size={25} />,
      isActive: false,
    },
  ];

  return (
    <section className="container side w-1/4 mx-auto bg-[#425C5A] rounded-3xl flex flex-col items-center my-2">
      <div className="text-white w-full flex flex-col items-center">
        <div className="flex flex-col items-center p-4 bg-[#3D5654] rounded-3xl w-full lex">
          <img src={profile} alt="Profile" className="rounded-full h-16 mb-2" />
          <h1 className="name">ALEX JOHNSON</h1>
          <span className="email">alex.johnson@gmail.com</span>
        </div>
        <div className="flex flex-col w-full items justify-between">
          {menuItems.map((item, index) => (
            <div
              className={`flex items-center gap-7 my-1 mx-10 cursor-pointer ${
                item.isActive ? "bg-[#E1ECEB] text-black rounded-full" : ""
              }`}
              key={index}
            >
              {item.icon}
              <p
                className={`itemp cursor-pointer ${
                  item.isActive ? "font-bold" : ""
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-col gap-2 active">
          <p className="text-[#A68B3D]">ACTIVE USERS</p>
          <div className="flex">
            <img src={img1} alt="User1" className="rounded-full w-8 h-8" />
            <img
              src={img2}
              alt="User2"
              className="rounded-full w-8 h-8 -ml-2"
            />
            <img
              src={img4}
              alt="User3"
              className="rounded-full w-8 h-8 -ml-2"
            />
            <img
              src={img3}
              alt="User3"
              className="rounded-full w-8 h-8 -ml-2"
            />
            <span className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center -ml-2">
              +70
            </span>
          </div>
          <img src={map} alt="map" style={{ width: "100%", height: "26%" }} />
        </div>
      </div>
    </section>
  );
}
