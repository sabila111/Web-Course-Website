import { Link, json } from "react-router-dom";
import Swal from "sweetalert2";

const PostedJobsCard = ({job}) => {
   
    const {_id,jobTitle,email,minPrice,maxPrice,deadline,category,description}= job

  const handleDelet =_id=>{
    console.log(_id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
        console.log('delet')
        fetch(`http://localhost:5000/jobs/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your job has been deleted.",
                    icon: "success"
                  });
            }
        })
        }
      });
  }

    return (
        <div className="card w-96 bg-blue-100 shadow-xl my-3">
  <div className="card-body">
    <p>{email}</p>
    <h2 className="card-title font-bold text-3xl ">{jobTitle}</h2>
    <p className="font-semibold text-xl">{category}</p>
    
   <div className="flex justify-between">
   <p><span className="font-medium text-lg">Min-Price:</span> ${minPrice}</p>
   <p><span className="font-medium text-lg">Max-Price:</span> ${maxPrice}</p>
   </div>
   <p><span className="font-medium text-lg">Deadline:</span> {deadline}</p>
   <p><span className="font-medium text-lg">Description:</span> {description}</p>
    <div className="card-actions flex justify-between">
      <Link to={`/update/${_id}`}>
      <button className="bg-blue-900 py-3 px-4 rounded-lg text-white font-bold ">Update</button>
      </Link>
      <button onClick={()=> handleDelet(_id)} className="py-3 px-4 rounded-lg outline-4 border-2 border-blue-900  font-bold  bg-white">Delete</button>
    </div>
  </div>
</div>
    );
};

export default PostedJobsCard;