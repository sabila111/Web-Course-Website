import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email,password,photo)

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Password should be at least 6 character or longer')
            return
        }
        else if (!/[A-Z]/.test(password)){
            setRegisterError('your password should be uppercase')
            return
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)){
            setRegisterError('Your password should contain at least one special character')
            return
        }

        createUser (email, password)
        .then(result => {
         console.log(result.user)
         toast.success('User Created Successfully')
        })
        .catch(error => {
         console.error(error)
         toast.error('Email alreaday existed')
        })
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ml-80">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="py-3 px-5 rounded-lg text-pink-400 font-bold outline-pink-300 outline-none">Register</button>
                </div>
            </form>
            {
                registerError && <p className='text-red-500 text-center'>{registerError}</p>
            }
            {
                success && <p className="text-lime-600 text-center">{success}</p>
            }

            <p className="text-center mt-4">Already have an account? Please <Link className="text-pink-400 font-bold" to={'/login'}>Login</Link></p>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;