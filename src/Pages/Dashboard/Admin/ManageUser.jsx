import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await axiosSecure.get('/user');
      return res.data;
    },

  });
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is an Admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  }
  const handleMakeAgent = (user) => {
    axiosSecure.patch(`/users/agent/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is an Agent now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

  }

  return (
    <>

      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl text-[#004274] font-semibold">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id} className="text-lg" >
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td >
                  <div className="flex gap-2 items-center">
                    {
                      user.role === "admin" ? 'Admin' : <button onClick={() => { handleMakeAdmin(user) }} className="btn-one">Admin</button>
                    }
                    {
                      user.role === "agent" ? 'Agent' :<button onClick={() => { handleMakeAgent(user) }} className="btn-one">Agent</button>

                    }
                  </div>
                </td>
                <td >
                  <div className="flex gap-2">
                    <button>Fraud</button>
                    <button onClick={() => { handleDeleteUser(user) }} className="btn-one" >Delete</button>


                   
                    
                  </div>

                </td>

              </tr>)
            }


          </tbody>
        </table>
      </div>
    </>

  );
};

export default ManageUser;
