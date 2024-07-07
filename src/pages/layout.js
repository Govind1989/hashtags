"use client";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Footer from "../app/components/Footer";
import "../app/globals.css"; // Ensure to import any global styles
import NavBar from "../app/components/NavBar";
import SideBar from "../app/components/SideBar";
import { useRouter } from "next/router";
import SideBarDesktop from "../app/components/SideBarDesktop";
import SideBarMobile from "../app/components/SideBarMobile";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className={inter.className}>
      <NavBar page="Home" />

      <main className="z-10 px-2 bg-white dark:bg-gray-800">{children}</main>
      <aside className="">
        <SideBarDesktop pathname={pathname} />
      </aside>
      <div className="block md:hidden">
        <SideBarMobile pathname={pathname} />
      </div>

      <Footer page="Home" />
    </div>
  );
};

export default Layout;
