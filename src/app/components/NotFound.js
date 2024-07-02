import React from "react";
import Link from "next/link";

const NotFound = ({ slug }) => {
  return (
    <div className="bg-white py-8">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-bold text-gray-400">404</h1>
        <span className="text-gray-800 text-xl ">&quot;{slug}&quot;</span>
        <p className="text-md font-medium ">Shop Not Found</p>
        <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
