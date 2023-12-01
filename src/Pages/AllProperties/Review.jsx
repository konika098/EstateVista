
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';

const Review = () => {
    const axiosSecure = useAxiosSecure();
    // const { data: review = []} = useQuery({
    //   queryKey: ['review'],
    //   queryFn: async () => {
    //     const res = await axiosSecure.post('/review');
    //     return res.data;
    //   },
  
    // });

    const handleReview =e=>{
        e.preventDefault()
        const description =e.target.description
        const  title=e.target.title
        const date=e.target.date
        const  reviewDetails={description,title,date}
        axiosSecure.post('/review',reviewDetails)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              icon: "success",
              title: 'add your property your review',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      }
      
    // const handleDeleteReview = (review) => {
    //     Swal.fire({
    //       title: "Are you sure?",
    //       text: "You won't be able to revert this!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         axiosSecure.delete(`/review/${review._id}`).then((res) => {
    //           if (res.data.deletedCount > 0) {
    //             refetch();
    //             Swal.fire({
    //               title: "Deleted!",
    //               text: "Your file has been deleted.",
    //               icon: "success",
    //             });
    //           }
    //         });
    //       }
    //     });
    
    //   }
    return (
       <>
           <div className="mt-10">
                <h1 className="text-2xl text-center text-[#004274]  mb-7 font-semibold">Add your review</h1>
                <form onSubmit={handleReview}>

                    <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                        <div >
                            <div className="m-1 mb-3 text-lg text-gray-500 text-semibold">Property Title </div>
                            <input type="text" name="title" placeholder="enter your properties title" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                       
                        <div >

                            <div htmlFor="Deadline" className="m-1 text-lg text-gray-500 text-semibold">Date</div>
                            <input type="date" name="date" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                       
                       
                     

                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Description</div>
                            <input name='description' type="text" placeholder="enter your properties details" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>



                    </div>
                    <div className="text-center flex flex-col w-[40%] items-center justify-center mx-auto mt-7">
                        <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">submit
                        </button>
                        <button  className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Delete
                        </button>

                    </div>
                </form>
            </div>

       </>
    );
};

export default Review;