import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react/dist/cjs/lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="my-10 flex flex-col gap-5 ">
        <span className="px-4 py-2 mx-auto rounded-full bg-gray-100 text-[#2da2b6] font-medium ">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-medium">
          Search, Apply & <br /> Get your{" "}
          <span className="text-purple-700">Dream Jobs</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          pariatur recusandae veniam! Porro, rerum illum.
        </p>
        <div className="w-[40%] flex items-center gap-4 shadow-lg pl-3 mx-auto rounded-full border border-gray-200 ">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full "
          />
          <Button className='rounded-r-full bg-purple-700 ' >
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
