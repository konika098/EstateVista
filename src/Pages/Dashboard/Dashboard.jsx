import { NavLink, Outlet } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSolution, AiOutlineUsergroupAdd, AiTwotoneShop } from "react-icons/ai";
import useAdmin from '../../Hooks/useAdmin';
import { IoHomeSharp } from "react-icons/io5";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  const isAgent =true
  
  return (
    <>

      <div className='flex'>
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
            <ul className="menu p-4 w-80 min-h-full bg-[#004274] text-white text-xl gap-5">
            {
  isAdmin ? (
    <>
      <NavLink to='/dashboard/adminProfile' className='ml-2 flex items-center gap-2'><MdAccountCircle />Admin Profile</NavLink>
      <NavLink to="/dashboard/ManageProperties" className='ml-2 flex items-center gap-2'><AiTwotoneShop />Manage Properties</NavLink>
      <NavLink to='/dashboard/ManageUsers' className='ml-2 flex items-center gap-2'><AiOutlineUsergroupAdd /> Manage Users</NavLink>
      <NavLink to="/dashboard/ManageReview" className='ml-2 flex items-center gap-2'><AiOutlineSolution />Manage reviews</NavLink>
      <div className="divider">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>

    </>
  ) : isAgent ? (
    <>
      <NavLink to='/dashboard/agentProfile'>Agent Profile</NavLink>
      <NavLink to='/dashboard/addProperties'>My Added Properties</NavLink>
      <NavLink to='/dashboard/soldProperties'>My Sold Properties</NavLink>
      <NavLink to='/dashboard/request'>Requested Properties</NavLink>
      <div className="divider ">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>
    </>
  ) : (
    <>
      <NavLink to='/dashboard/myProfile'>My Profile</NavLink>
      <NavLink to='/dashboard/wishlist'>Wishlist</NavLink>
      <NavLink to='/dashboard/propertyBought'>Property Bought</NavLink>
      <NavLink to='/dashboard/myReviews'>My Reviews</NavLink>
      <div className="divider ">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>
    </>
  )
}

            </ul>

          </div>
        </div>

        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;