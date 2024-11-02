import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Sidenav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mini Sidebar with Icons and Hamburger */}
      <div className=" h-full w-[60px]  flex flex-col items-center p-4">
        <button
          className="mb-4 text-white text-xl focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="ri-menu-fill"></i> {/* Hamburger icon */}
        </button>
        <Link to="/trending" className="mb-4 text-zinc-200 text-xl">
          <i className="ri-fire-fill"></i> {/* Icon for Trending */}
        </Link>
        <Link to="/popular" className="mb-4 text-zinc-200 text-xl">
          <i className="ri-sparkling-fill"></i> {/* Icon for Popular */}
        </Link>
        <Link to="/movies" className="mb-4 text-zinc-200 text-xl">
          <i className="ri-movie-2-fill"></i> {/* Icon for Movies */}
        </Link>
        <Link to="/shows" className="mb-4 text-zinc-200 text-xl">
          <i className="ri-tv-2-fill"></i> {/* Icon for New Shows */}
        </Link>
        <Link to="/people" className="mb-4 text-zinc-200 text-xl">
          <i className="ri-group-fill"></i> {/* Icon for People */}
        </Link>
      </div>

      {/* Sliding Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent
          side="left"
          className="w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[25vw] xl:w-[20vw] bg-primary-background-dark"

        >
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold playfair-display-sc-regular text-left text-white tracking-wide">
              {" "}
              CINE<span className="text-red-500">CRAFT</span>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-[100vh] scroll-smooth border-zinc-500 p-2">
            {/* Full Sidebar Navigation Links */}
            <nav className="flex flex-col mb-1 text-zinc-400">
              <h1 className="text-white/85 pl-2 font-semibold text-xl mt-6 mb-3">
                New Feeds
              </h1>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-fire-fill"></i>Trending
              </Link>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-sparkling-fill mr-1"></i>Popular
              </Link>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-movie-2-fill mr-1"></i>Movies
              </Link>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-tv-2-fill mr-1"></i>New Shows
              </Link>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-group-fill mr-1"></i>People
              </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400" />

            {/* Second section of links */}
            <nav className="flex flex-col mb-1 text-zinc-400">
              <h1 className="text-white/85 pl-2 font-semibold text-xl mt-6 mb-3">
                Website Information
              </h1>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-information-fill mr-1"></i>About CineCraft
              </Link>
              <Link className="p-4 hover:bg-red-500/75 hover:text-white duration-300 rounded-lg">
                <i className="ri-phone-fill mr-1"></i>Contact Us
              </Link>
            </nav>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline" onClick={() => setSidebarOpen(false)}>
                Close
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidenav;
