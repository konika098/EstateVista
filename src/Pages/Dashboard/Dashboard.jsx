import { NavLink } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSolution, AiOutlineUsergroupAdd, AiTwotoneShop } from "react-icons/ai";
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <>
           
    <div className="drawer  lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className=" drawer-button flex justify-start lg:hidden">
        <img className='w-10 h-10' src="https://i.ibb.co/fxgR0Cq/640px-Home-icon-svg.png" alt="" />
        </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-screen  bg-[#004274] text-white text-xl gap-5">
      {/* Sidebar content here */}
      {
                        isAdmin?<>
                        <NavLink to='/adminProfile' className='ml-2 flex items-center gap-2'><MdAccountCircle  />Admin Profile</NavLink>
                        <NavLink to="/ManageProperties" className='ml-2 flex items-center gap-2'><AiTwotoneShop />Manage Properties</NavLink>
                        <NavLink to='/ManageUsers' className='ml-2 flex items-center gap-2'><AiOutlineUsergroupAdd /> Manage Users</NavLink>
                        <NavLink to="/ManageReview" className='ml-2 flex items-center gap-2'><AiOutlineSolution />Manage reviews</NavLink>
                        </>:<>
                        <NavLink>Profile</NavLink>
                        </>
                       }
    </ul>
  
  </div>
</div>
        </>
    );
};

export default Dashboard;