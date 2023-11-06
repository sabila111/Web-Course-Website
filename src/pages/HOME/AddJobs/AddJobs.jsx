import { useContext } from "react";
import { AuthContext } from "../../Shared/provider/AuthProvider";

const AddJobs = () => {

    const {user} = useContext(AuthContext)

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const email = user?.email;
        const min_price = form.minPrice.value;
        const max_price = form.maxPrice.value;
        const deadline= form.deadline.value;
        const category= form.category.value;
        const description= form.description.value;

        const course ={title,email,min_price,max_price,deadline,category,description}
        console.log(course)

    }

    return (
        <div className="bg-red-200 p-24">
        <h2 className="text-3xl font-extrabold mb-4">Add Product</h2>
        <form onSubmit={handleAddProduct}>
            {/* form row 1 */}
            <div className="md:flex mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="job title" className="input input-bordered w-full" />
                    </label>
                </div>
                
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full" />
                    </label>
                </div>

                
            </div>
            {/* form row 2 */}
            <div className="md:flex mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Minimum Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="minPrice" placeholder="min-price" className="input input-bordered w-full" />
                    </label>
                </div>
                
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Maximum price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="maxPrice" placeholder="max-price" className="input input-bordered w-full" />
                    </label>
                </div>

                
            </div>
            {/* form row 3 */}
            <div className="md:flex mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="deadline"  className="input input-bordered w-full" />
                    </label>
                </div>
                
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <select name="category" className="input input-bordered w-full">
                            <option value=" web development">Web Development</option>
                            <option value="digital marketing">Digital Marketing</option>
                            <option value="graphics design">Graphics Design</option>
                        </select>
                    </label>
                </div>

                
            </div>
            <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                    </label>
                </div>
         <input type="submit" value="Add Button" className="btn btn-block mt-6"/>
        </form>
    </div>
    );
};

export default AddJobs;