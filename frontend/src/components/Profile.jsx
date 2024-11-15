import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react/dist/cjs/lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobsTable from "@/components/AppliedJobsTable";

const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS"];
const isResume = true;

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow-lg ">
        <div className="flex justify-between my-6 gap-2">
          <div className="flex items-center gap-6">
            <Avatar>
              <AvatarImage
                className="h-24 w-24 rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-2xl">Mansi Mittal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                vel numquam nihil eveniet repellat deserunt!
              </p>
            </div>
          </div>
          <Button variant="outline" className="">
            <Pen />
          </Button>
        </div>
        <div className="mx-5">
          <div>
            <div className="flex gap-3 items-center my-2">
              <Mail />
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                mansi@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <Contact />
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                1238483928
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h3 className="font-medium text-lg">Skills :-</h3>
            <div>
              {skills.length !== 0 ? (
                skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm mx-1 "
                  >
                    {skill}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <h3 className="font-medium text-lg">Resume :-</h3>
            <div className="grid max-w-sm w-full items-center gap-1.5">
              {isResume ? (
                <Label>
                  <a
                    href="https://resume.com"
                    target="blank"
                    className="text-md font-bold text-blue-500 hover:text-blue-600 cursor-pointer w-full hover:underline"
                  >
                    Mansi Mittal
                  </a>
                </Label>
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-4xl mx-auto bg-white rounded-2xl ">
        <h3 className="font-bold text-lg my-5">Applied Jobs</h3>
        <AppliedJobsTable />
      </div>
    </div>
  );
};

export default Profile;
