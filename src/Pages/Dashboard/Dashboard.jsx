import { NavLink, Outlet } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSolution, AiOutlineUsergroupAdd, AiTwotoneShop } from "react-icons/ai";
import useAdmin from '../../Hooks/useAdmin';
import { IoHomeSharp } from "react-icons/io5";
import useAgent from '../../Hooks/useAgent';




const Dashboard = () => {
  
  const [isAdmin] = useAdmin()
  const [isAgent] =useAgent()
  console.log(isAgent,isAdmin);

  
  return (
    <>

      <div className='flex w-full'>
        <div className="drawer  lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className=" drawer-button flex justify-start lg:hidden">
              <img className='w-10 h-10' src="https://i.ibb.co/fxgR0Cq/640px-Home-icon-svg.png" alt="" />
            </label>

          </div>
          <div className="drawer-side w-[400px]">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-[#004274] text-white text-xl gap-5">
            {
  isAdmin ? (
    <>
      <NavLink to='/dashboard/adminProfile' className='ml-2 flex items-center gap-2'><MdAccountCircle />Admin Profile</NavLink>
      <NavLink to="/dashboard/ManageProperties" className='ml-2 flex items-center gap-2'><AiTwotoneShop />Manage Properties</NavLink>
      <NavLink to="/dashboard/ManageAdvertisement " className='ml-2 flex items-center gap-2'><AiTwotoneShop />Manage Advertisement </NavLink>
      <NavLink to='/dashboard/ManageUsers' className='ml-2 flex items-center gap-2'><AiOutlineUsergroupAdd /> Manage Users</NavLink>
      <NavLink to="/dashboard/ManageReview" className='ml-2 flex items-center gap-2'><AiOutlineSolution />Manage reviews</NavLink>
      <div className="divider">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>

    </>
  ) : isAgent ?(
    <>
      <NavLink to='/dashboard/agentProfile' className='ml-2 flex items-center gap-2'>Agent Profile</NavLink>
      <NavLink to='/dashboard/addProperties' className='ml-2 flex items-center gap-2'>Add Properties</NavLink>
      <NavLink to='/dashboard/myProperties' className='ml-2 flex items-center gap-2'>My Added Properties</NavLink>
      <NavLink to="/dashboard/addAdvertisement " className='ml-2 flex items-center gap-2'>Add Advertisement </NavLink>
      <NavLink to='/dashboard/soldProperties' className='ml-2 flex items-center gap-2'>My Sold Properties</NavLink>
      <NavLink to='/dashboard/request' className='ml-2 flex items-center gap-2'>Requested Properties</NavLink>
      <div className="divider ">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>
    </>
  ) : (
    <>
      <NavLink to='/dashboard/myProfile'className='ml-2 flex items-center gap-2'>My Profile</NavLink>
      <NavLink to='/dashboard/wishlist' className='ml-2 flex items-center gap-2'>Wishlist</NavLink>
      <NavLink to='/dashboard/propertyBought' className='ml-2 flex items-center gap-2'>Property Bought</NavLink>
      <NavLink to='/dashboard/myReviews' className='ml-2 flex items-center gap-2'>My Reviews</NavLink>
      <div className="divider ">OR</div>
      <NavLink to="/" className='ml-2 flex items-center gap-2'><IoHomeSharp />Home</NavLink>
    </>
  )
}


            </ul>

          </div>
        </div>

        <div className='flex-grow'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;