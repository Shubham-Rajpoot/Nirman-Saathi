import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import axios from "axios";
import store from "@/redux/store";

const JobDescription = () => {
  const isApplied = false;
  const params = useParams();
  const jobID = params.id;
  const {singleJob} = useSelector(store => store.job);
  const {user} = useSelector(store => store.auth)

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobID}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();   
  }, [jobID, dispatch, user?._id]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              {singleJob?.position} Position
            </Badge>
            <Badge className={"text-red-700 font-bold"} variant="ghost">
            {singleJob?.jobType} 
            </Badge>
            <Badge className={"text-purple-700 font-bold"} variant="ghost">
            {singleJob?.salary}  LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-500 font-medium py-4">Job Desciption</h1>
      <div>
        <div className="flex gap-2"><h3 className="font-bold">Role:</h3> <span>{singleJob?.title} </span></div>
        <div className="flex gap-2"><h3 className="font-bold">Location:</h3> <span>{singleJob?.location} </span></div>
        <div className="flex gap-2"><h3 className="font-bold">Description:</h3> <span>{singleJob?.description} </span></div>
        <div className="flex gap-2"><h3 className="font-bold">Experience:</h3> <span>{singleJob?.experience}  yrs</span></div>
        <div className="flex gap-2"><h3 className="font-bold">Salary:</h3> <span>{singleJob?.salary} LPA</span></div>
        <div className="flex gap-2"><h3 className="font-bold">Total Applicants:</h3> <span>4 </span></div>
        <div className="flex gap-2"><h3 className="font-bold">Posted Date:</h3> <span>17-10-2024</span></div>
      </div>
    </div>
  );
};

export default JobDescription;
