import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-full min-h-screen w-full bg-white dark:bg-gray-800">
        <Navbar />
        <main>
          <div className="px-2 sm:px-4 py-2.5 dark:text-white">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
