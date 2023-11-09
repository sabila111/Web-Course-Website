import { useLoaderData } from "react-router-dom";
import MyBidRoute from "./MyBidRoute";


const MyBids = () => {

   const bids = useLoaderData()

    return (
        <div>
        {
               bids.map(bid => <MyBidRoute key={bid._id} bid={bid}></MyBidRoute>)
        }
        </div>
    );
};

export default MyBids;