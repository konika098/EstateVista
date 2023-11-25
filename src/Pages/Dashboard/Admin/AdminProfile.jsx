import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminProfile = () => {
    const {user}=useContext(AuthContext)
    const handleAdminForm=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const phone =e.target.phone.value
        console.log(name,phone);
    }
    return (
        
        <>
        <h1 className="font-semibold text-center underline text-xl md:text-3xl text-[#004274]mt-10 mb-7 m-2">Admin Profile</h1>
   
    
  <div className="flex flex-col mx-auto justify-center items-center md:flex-row shadow rounded-xl max-w-7xl md:w-[50%]  m-2">
  <div>
        <img src={user.photoURL} alt="" />
    </div>
    <form onSubmit={handleAdminForm} className=" w-full md:w-3/4  ">
      
      <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
        <div >
          <div className="m-1 mb-3 text-lg text-gray-500 text-semibold">Profile Name</div>
          <input type="text" value={user.displayName} className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
        </div>
        <div >
          <div className="m-1 text-lg text-gray-500 text-semibold">Username</div>
          <input name='name' placeholder="enter your username" type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
        </div>
        <div >
          <div className="m-1 text-lg text-gray-500 text-semibold">E-mail</div>
          <input value={user.email} type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
        </div>
        <div className>
          <div className="m-1 text-lg text-gray-500 text-semibold">Phone</div>
          <input name='phone'  type="number" placeholder="enter your phone number" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
        </div>
        
       
      </div>
      <div className="text-center mt-7">
        <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Save
          </button>
       
      </div>
    </form>
   
  </div>


      
      </>
        
       
    );
};

export default AdminProfile;