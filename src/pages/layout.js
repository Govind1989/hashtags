"use client";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Footer from "../app/components/Footer";
import "../app/globals.css"; // Ensure to import any global styles
import NavBar from "../app/components/NavBar";
import SideBar from "../app/components/SideBar";
import { MdOutlineAdd, MdOutlineClose } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className={inter.className}>
      <NavBar page="Home" />
      {/* <div className=" "> */}
      {/* Sidebar Toggle Button */}
      <main className="z-10 px-2">{children}</main>
      <div className="">
        <button
          className="md:hidden fixed bottom-5 right-5 z-20 bg-gray-800 text-white rounded-full p-3 shadow-lg"
          onClick={toggleSideBar}
          aria-label="Open Sidebar"
        >
          {isSideBarOpen ? (
            <MdOutlineClose className="w-6 h-6" />
          ) : (
            <MdOutlineAdd className="w-6 h-6" />
          )}
        </button>
        {/* Sidebar */}
        <aside
          className={`absolute md:relative right-[4.25rem] top-[4rem]   md:right-0 md:flex md:flex-col md:justify-start md:py-24 md:px-0 -px-8 z-20  
               
              `}
        >
          <div
            className={`fixed md:left-0 md:top-0  h-full flex flex-col gap-4   justify-end md:justify-start py-28 px-1  "
              id="nav-content  ${isSideBarOpen ? "block" : "hidden"}`}
          >
            <SideBar />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
