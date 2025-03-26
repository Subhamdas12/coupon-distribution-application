import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SideNav from "./SideNav";
import { House, Tag, Users, Gift } from "lucide-react";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Sidebar - will be toggled by the hamburger menu */}
      <SideNav
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm border-b border-gray-200 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="cursor-pointer relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900  "
                aria-controls="mobile-menu"
                aria-expanded={isSidebarOpen}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">
                  {isSidebarOpen ? "Close menu" : "Open menu"}
                </span>
                {isSidebarOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
            {/* Left side - Logo/Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center gap-2 font-semibold">
                  <Tag className="h-6 w-6 text-indigo-600" />
                  <span className="text-lg">Coupon Admin</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
