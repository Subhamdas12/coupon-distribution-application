import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { House, Tag, Users, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const SideNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Dialog
      open={isSidebarOpen}
      onClose={setIsSidebarOpen}
      className="relative z-10"
    >
      {/* Mobile backdrop */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 md:hidden"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-64 transform transition duration-500 ease-in-out data-closed:-translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl md:border-r md:bg-background">
                {/* Mobile close button */}
                <div className="flex items-center justify-between border-b px-6 py-4 ">
                  <div className="flex items-center gap-2 font-semibold">
                    <Tag className="h-6 w-6" />
                    <span>Coupon Admin</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Navigation links */}
                <div className="flex h-[calc(100vh-4rem)] flex-col gap-2 overflow-auto p-4">
                  <nav className="grid gap-1">
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <House className="mr-2 h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      to="/coupons"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Tag className="mr-2 h-5 w-5" />
                      Coupons
                    </Link>
                    <Link
                      to="/users"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Users className="mr-2 h-5 w-5" />
                      Users
                    </Link>
                    <Link
                      to="/claims"
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 justify-start bg-secondary"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Gift className="mr-2 h-5 w-5" />
                      Claims
                    </Link>
                  </nav>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SideNav;
