import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add'}>Add Job</NavLink></li>
        <li><NavLink to={'/posted'}>My Posted jobs</NavLink></li>
        <li><NavLink to={'/bids'}>My Bids</NavLink></li>
        <li><NavLink to={'/bidRequests'}>Bid Requests</NavLink></li>

    </> 

    return (
        <div className=" -mb-16">
            
            <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navLink}
                    </ul>
                </div>
                <h2 className="font-bold text-xl "><span className="text-blue-800 text-5xl">E</span>learning</h2>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">
                    <style>
                        {`
      .menu-horizontal li:hover {
        background-color: rgb(23 37 84);
        padding:10px;
        border-radius:5px;
        color: white
      }
    `}
                    </style>
                    {navLink}
                </ul>
            </div>
            {/* <div className="navbar-end">

                {
                    user ?
                        (
                            <div className="flex gap-3">
                                <div>
                                    <p className="mt-3 ">{user.email}</p>
                                    <img src={user.photo} alt="" />
                                </div>
                                <button onClick={handleSignOut} className="py-3 px-5 text-white font-medium rounded-lg bg-pink-600">Sign Out</button>
                            </div>
                        )

                        :
                        (
                            <div>
                                <Link to={'/login'}>
                                    <button className="py-3 px-5 text-white font-medium rounded-lg bg-pink-600">Login</button>
                                </Link>
                            </div>
                        )
                }




            </div> */}
        </div>

        </div>
    );
};

export default Navbar;