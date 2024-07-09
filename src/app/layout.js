"use client";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Footer from "./components/Footer";
import "./globals.css"; // Ensure to import any global styles
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { MdOutlineAdd, MdOutlineClose } from "react-icons/md";
import SideBarDesktop from "./components/SideBarDesktop";
import SideBarMobile from "./components/SideBarMobile";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, isMessage = false, slug }) => {
  console.log(slug);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`#Hashtags`}</title>
      </head>
      <body className={inter.className}>
        <NavBar page="Home" />

        <main className="z-10 px-2 bg-white dark:bg-gray-800">{children}</main>
        <aside>
          <SideBarDesktop isMessage={isMessage} slug={slug} />
        </aside>
        <div className="block md:hidden">
          <SideBarMobile isMessage={isMessage} slug={slug} />
        </div>

        <Footer page="Home" />
      </body>
    </html>
  );
};

export default Layout;
