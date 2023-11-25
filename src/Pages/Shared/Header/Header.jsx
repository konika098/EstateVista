
import { Link, NavLink } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import SharedButton from "../../../Component/Loader/SharedButton/SharedButton";

const Header = () => {
  const {user,logOut} =useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
    .then(()=>console.log("successfully log out"))
    .catch(error=>console.error(error))
}

  const navbar = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all" className="ml-5">All Properties</NavLink>
     
      <NavLink to="/dashboard" className="ml-5">Dashboard</NavLink>
    </>
  );

  return (
    <div className="bg-base text-[#004274]">
      <div className="navbar relative backdrop-filter backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 backdrop-filter backdrop-blur-md">
              {navbar}
            </ul>
          </div>
          <img className='w-24 h-24' src="https://i.ibb.co/kBXptDR/Blue-Abstract-Illustrative-Real-Estate-Property-Logo-removebg-preview.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            {navbar}
          </ul>
        </div>
        <div className="navbar-end">
          
          {
          user? "":<>
          <Link to='/contact' className='text-4xl'><IoIosContact /></Link>
          </>
        }
        <div className="flex items-center gap-1 ">
          {
            user?<img className="rounded-full w-9 md:w-16" src={user.photoURL} alt="" />:""
          }
          {
            user?<>
            <Link onClick={handleLogOut} > 
            <SharedButton   icon={'https://i.ibb.co/2h8ypvc/126467.png'} name={'Logout'}></SharedButton>
            </Link> 
           
            </>
          :" "
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
