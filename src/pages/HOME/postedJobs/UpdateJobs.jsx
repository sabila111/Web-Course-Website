// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Shared/provider/AuthProvider";


// const UpdateJobs = () => {
    
//     const job = useLoaderData()
//     const {_id,jobTitle,email,minPrice,maxPrice,deadline,category,description}= job

//     const {user} = useContext(AuthContext)

//     const handleAddProduct = e =>{
//         e.preventDefault()
//         const form = e.target
//         const jobTitle = form.jobTitle.value;
//         const email = user?.email;
//         const minPrice = form.minPrice.value;
//         const maxPrice = form.maxPrice.value;
//         const deadline= form.deadline.value;
//         const category= form.category.value;
//         const description= form.description.value;

//         const job ={jobTitle,email,minPrice,maxPrice,deadline,category,description}
//         console.log(job)

//         // send data to the server 
//         fetch('http://localhost:5000/jobs',{
//             method:'POST',
//         headers:{
//             'content-type' : 'application/json'
//         },
//         body:JSON.stringify(job)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if(data.insertedId){
//                 Swal.fire({
//                     title: 'Success',
//                     text: 'Added job successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                   })
//             }
//         })

//     }



//     return (
//         <div className="mt-40">
//             <h2>update jobs :{email}</h2>

//             <div className="">
//         <h2 className="text-3xl text-blue-900 font-extrabold text-center mb-6">Update Your Job</h2>
//         <form onSubmit={handleAddProduct}>
//             {/* form row 1 */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium">Job Title</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="text" name="jobTitle" placeholder="job title" defaultValue={jobTitle} className="input input-bordered w-full" />
//                     </label>
//                 </div>
                
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium"> Email</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
//                     </label>
//                 </div>

                
//             </div>
//             {/* form row 2 */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium"> Minimum Price</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="text" name="minPrice" placeholder="min-price" defaultValue={minPrice} className="input input-bordered w-full" />
//                     </label>
//                 </div>
                
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium"> Maximum price</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="text" name="maxPrice" placeholder="max-price" defaultValue={maxPrice} className="input input-bordered w-full" />
//                     </label>
//                 </div>

                
//             </div>
//             {/* form row 3 */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium">Deadline</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="date" name="deadline" defaultValue={deadline}  className="input input-bordered w-full" />
//                     </label>
//                 </div>
                
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium">Category</span>
//                     </label>
//                     <label className="input-group">
//                         <select name="category" className="input input-bordered w-full">
//                             <option value=" web development">Web Development</option>
//                             <option value="digital marketing">Digital Marketing</option>
//                             <option value="graphics design">Graphics Design</option>
//                         </select>
//                     </label>
//                 </div>

                
//             </div>
//             <div className="form-control md:w-1/2 ">
//                     <label className="label">
//                         <span className="label-text text-xl font-medium">Short Description</span>
//                     </label>
//                     <label className="input-group">
//                         <input type="text" name="description" placeholder="description" defaultValue={description} className="input input-bordered w-full" />
//                     </label>
//                 </div>
//          <input type="submit" value="Update" className=" py-3 px-4 rounded-lg btn-block bg-blue-900 text-white font-bold mt-6"/>
//         </form>
//     </div>

//         </div>
//     );
// };

// export default UpdateJobs;