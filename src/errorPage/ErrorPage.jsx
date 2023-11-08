import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='text-4xl text-red-700 text-center font-bold mt-16'>
            <img src={'https://i.ibb.co/5h7JNnJ/images.png'} alt="" />
            <h1>404 NOT FOUND</h1>
          <Link to={'/'}><button className="px-3 py-4 rounded-lg bg-blue-900">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;