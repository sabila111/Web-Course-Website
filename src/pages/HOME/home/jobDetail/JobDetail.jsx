import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Shared/provider/AuthProvider";
import Swal from "sweetalert2";

const JobDetail = () => {

    const job = useLoaderData()
    const { _id, jobTitle, email, minPrice, maxPrice, deadline, category, description } = job

    const { user } = useContext(AuthContext)

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const buyerEmail = form.buyerEmail.value;
        const email = user?.email;
        const price = form.price.value;
        const deadline = form.deadline.value;



        const job = { buyerEmail, email, price, deadline, category }
        console.log(job)

        // send data to the server 
        fetch('https://sabilas-web-school.vercel.app/jobs/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Added job successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="mt-40">
           
            <div className="card w-1/2 ml-80 text-center  bg-blue-900 shadow-xl">
  <div className="card-body text-white">
    <h2 className=" text-center font-bold text-3xl text-white">{jobTitle}</h2>
    <p><span className="font-bold text-lg text-white">Price range: </span>{maxPrice}-{minPrice}</p>
    <p ><span className="font-bold text-lg text-white">Deadeline: </span>{deadline}</p>
    <p ><span className="font-bold text-lg text-white">Description: </span>{description}</p>
  </div>
</div>


            <div className="mt-20">
                <h2 className="text-3xl text-blue-900 font-extrabold text-center mb-6">Bid Now</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form row 1 */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Buyer Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="buyerEmail" placeholder="buyer email" defaultValue={email} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium"> Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>
                    {/* form row 2 */}
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>

                    <Link to={`/bids/${_id}`}><input type="submit" value="Bid on the project" className=" py-3 px-4 rounded-lg btn-block bg-blue-900 text-white font-bold mt-6" /></Link>
                </form>
            </div>

        </div>
    );
};

export default JobDetail;