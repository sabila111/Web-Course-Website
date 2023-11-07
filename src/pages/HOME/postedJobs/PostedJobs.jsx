import { useLoaderData } from "react-router-dom";
import PostedJobsCard from "./PostedJobsCard";

const PostedJobs = () => {

     const jobs = useLoaderData()

    return (
        <div className="my-24">
           <h1 className="text-center font-bold text-2xl">My Posted Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
                jobs.map(job => <PostedJobsCard key={job._id} job={job}></PostedJobsCard>)
            }
            </div>
        </div>
    );
};

export default PostedJobs;