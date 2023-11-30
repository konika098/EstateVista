import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Wishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { data: wish = [],refetch } = useQuery({
        queryKey: ['wish'],
        queryFn: async () => {
            const res = await axiosSecure.get('/wishlist');
            return res.data;
        },

    });
    const handleDeleteWishList = (wish) => {
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
            axiosSecure.delete(`/wishes/${wish._id}`).then((res) => {
                console.log(res.data);
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Remove!",
                  text: "Your file has been Remove.",
                  icon: "success",
                });
              }
            });
          }
        });
    
      }
    
    return (
        <>
            <div className="flex gap-2 mt-10 mr-5">
            {
                wish.map(item => <div key={item.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="w-full h-80" src={item.photo} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>Location:{item.location}</p>
                            <p>Max-Price:{item.maxPrice}</p>
                            <p>Min-Price:{item.minPrice}</p>
                            <p>Status:{item.verificationStatus}</p>
                            <div className="card-actions justify-end">
                               <Link to={`/dashboard/offer/${item?._id}`}> <button className="btn-one">Offer</button></Link>
                                <button onClick={() => { handleDeleteWishList(item) }} className="btn-one">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>

        </>
    );
};

export default Wishlist;