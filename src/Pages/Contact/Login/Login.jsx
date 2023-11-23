import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {logIn}=useContext(AuthContext)
    const handleLogin =e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            console.log(result)
            Swal.fire({
                icon: "success",
                title: "Sign In Successful",
                text: "You have successfully signed in!",
              });
        })
        .catch(error=>{console.log(error)})
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
                            <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
                                <div className="  md:w-1/2 overflow-hidden ">
                                    <div className="flex flex-col items-center justify-center text-stone-400">
                                        <ion-icon name="logo-amplify" className="text-5xl text-fuchsia-600" />
                                        <form onSubmit={handleLogin} className="flex flex-col">
                                            <div className="m-2">EMAIL</div>
                                            <input name="email" className="border-b m-2  bg-gray-50 focus:outline-none" />
                                            <div className="m-2">PASSWORD</div>
                                            <input name="password" className="border-b m-2  bg-gray-50  focus:outline-none" type="password" />
                                            <div className="flex m-2">
                                                <input className="border-b  border-stone-400 " type="checkbox" />
                                                <div className="ml-1">Remember Me</div>
                                            </div>
                                            <div className="flex m-2">
                                                <button className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium">LOGIN</button>
                                                
                                                
                                                <button className="text-transparent  bg-clip-text bg-gradient-to-l from-fuchsia-600 to-cyan-400 font-bold ml-2 border-2 rounded-2xl px-6 border-cyan-400">GOOGLE</button>
                                                
                                               
                                                    
                                            </div>
                                            <div className="divider">OR</div>
                                                <Link to='/register'><button className="text-transparent  bg-clip-text bg-gradient-to-l from-fuchsia-600 to-cyan-400 font-bold ml-2 border-2 rounded-2xl px-6 border-cyan-400">CREATE
                                                    ACCOUNT</button></Link>
                                           
                                        </form>
                                        <div className="m-2">Forgotten your login details?</div>
                                    </div>
                                </div>
                                <div className=" md:w-1/2 overflow-hidden ">
                                    <img src="https://source.unsplash.com/700x600/?computer,login" alt className />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Login;