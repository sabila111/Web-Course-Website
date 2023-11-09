import { Link } from "react-router-dom";


const Web = ({job}) => {

    const {_id,jobTitle,email,minPrice,maxPrice,deadline,category,description}=job
    return (
        <div className="card w-72  bg-blue-900 shadow-xl">
  <div className="card-body text-white">
    <h2 className="card-title font-bold text-3xl text-white">{jobTitle}</h2>
    <p><span className="font-bold text-lg text-white">Price range: </span>{maxPrice}-{minPrice}</p>
    <p ><span className="font-bold text-lg text-white">Deadeline: </span>{deadline}</p>
    <p ><span className="font-bold text-lg text-white">Description: </span>{description}</p>
    <div className="card-actions ">
      <Link to={`/jobDetail/${_id}`}><button className="px-20 py-3 rounded-lg bg-white text-black w-full  font-bold">BidNow</button></Link>
    </div>
  </div>
</div>
    );
};

export default Web;