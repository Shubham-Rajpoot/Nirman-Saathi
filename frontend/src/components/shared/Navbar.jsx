import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Navbar = () => {

  const user = true;

  
  const {user} = useSelector(store=>store.auth) ;

  return (
    <>
      <div className="bg-black">
        <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-5 ">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {" "}
              Nirman <span className="text-purple-700"> Saathi</span>
            </h1>
          </div>
          <div className="flex item-center gap-12">
            <ul className="flex font-medium items-center gap-5 text-[#FFF8DC]">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/browse">Browse</Link></li>
            </ul>
            {!user ? (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-purple-700">SignUp</Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Shubham Rajpoot</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-grey-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link" className='outline-none border-none'><Link to={'/profile'}>View Profile</Link></Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
