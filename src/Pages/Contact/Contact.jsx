import { useContext, useState } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../Hooks/usePublic/useAxiosPublic';


const Contact = () => {
    const [activeTab, setActiveTab] = useState('login');
    const { logIn, googleLogin, createUser, updateUserDetails } = useContext(AuthContext)
    const axiosPublic =useAxiosPublic()
    const logInNav = useNavigate()
    const location = useLocation();


    const handleTabToggle = (tab) => {
        setActiveTab(tab);
    };
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            console.log(result);
            const userInfo ={
                email:result.user?.email,
                name:result.user.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                logInNav('/')
            })
           
            
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have successfully logged in!",
            });
            window.location.reload()
            
        })
        .catch(error => {
            console.log(error);
        });
        
    }
    const handleGoogle =()=>{
        googleLogin()
        .then(result => {
            console.log(result);
            
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have successfully logged in!",
            });
            
        })
        .catch(error => {
            console.log(error);
        });
        
    }

    const renderLoginForm = () => {
        const handleSubmit = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);
            logIn(email, password)
                .then(result => {
                    console.log(result);
                    const userInfo ={
                        email:result.user?.email,
                        name:result.user.displayName
                    }
                    axiosPublic.post('/users',userInfo)
                    .then(res=>{
                        console.log(res.data)
                     
                    })
                    logInNav('/')
                   
                    Swal.fire({
                        icon: "success",
                        title: "Login Successful",
                        text: "You have successfully logged in!",
                    });
                     window.location.reload()
                    Navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    console.log(error);
                });
        };
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            E-mail
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            type="text"
                            name='email'
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className='flex gap-2 '>
                        <button
                            className="bg-[#004274] px-6 py-1 rounded-2xl text-white font-medium"
                            type="submit"
                        >
                            Login
                        </button>
                        <button onClick={handleGoogleLogin} className='text-transparent  bg-clip-text bg-[#004274] font-bold ml-2 border-2 rounded-2xl px-6 border-[#004274]'>Google</button>
                    </div>
                </form>
            </div>
        );
    };
    
    const renderRegisterForm = () => {
        const handleSubmit = (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const photo = e.target.photo.value;
            const name = e.target.name.value;
            const password = e.target.password.value;
            console.log(email, password, photo, name);
            createUser(email, password)
                .then(result => {
                    console.log(result);
                    updateUserDetails("", photo);
                    Swal.fire({
                        icon: "success",
                        title: "Register Successful",
                        text: "You have successfully registered!",
                    });
                    //  window.location.reload()
                })
                .catch(error => {
                    console.log(error);
                });
        };
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            type="text"
                            name='name'
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            E-mail
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            type="text"
                            name='email'
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            required
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
                            Photo URL
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3"
                            name="photo"
                            placeholder="enter your photo url"
                        />
                    </div>
    
                    <div className='flex gap-2 '>
                        <button
                            className="bg-[#004274] px-6 py-1 rounded-2xl text-white font-medium"
                            type="submit"
                        >
                            Register
                        </button>
                        <button onClick={handleGoogle} className='text-transparent  bg-clip-text bg-[#004274] font-bold ml-2 border-2 rounded-2xl px-6 border-[#004274]'>Google</button>
                    </div>
                </form>
            </div>
        );
    };
    


    return (
        <div className="flex mb-4">
            <div className="flex items-center justify-center h-screen mx-auto">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <div className="flex mb-4">
                        <button
                            className={`flex-1 py-2 px-4 ${activeTab === 'Register' ? 'bg-[#004274] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabToggle('Register')}
                        >
                            Register
                        </button>
                        <button
                            className={`flex-1 py-2 px-4 ${activeTab === 'login' ? 'bg-[#004274] text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabToggle('login')}
                        >
                           login
                        </button>
                    </div>

                    {activeTab === 'login' ? renderLoginForm() : renderRegisterForm()}
                </div>
            </div>
        </div>
    );




};

export default Contact;
