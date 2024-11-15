import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Plumber", "Fitter", "Labour", "Mistri", "Electrician"],
  },
  {
    filterType: "Salary",
    array: ["0-1k", "0-2K", "3k-5k", "5k-10k", "10k-20k"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md ">
      <h1 className="font-bold text-lg ">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {
                filterData.map((data , index) => (
                    <div>
                            <h1 className="font-bold text-lg">{data.filterType}</h1>
                            {
                                data.array.map((item , index) => {
                                    return(

                                        <div className="flex items-center space-x-3 my-2">
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                    </div>
        
                ))

        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
