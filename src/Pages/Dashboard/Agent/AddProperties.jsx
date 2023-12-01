import Swal from "sweetalert2";

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddProperties = () => {
    const { user } = useContext(AuthContext)

    const handleAddProperties = e => {

        e.preventDefault()
        const agentEmail = user.email
        const agentName = user.displayName
        const title = e.target.title.value
        const location = e.target.location.value
        const date = e.target.date.value
        const maxPrice = e.target.maxPrice.value
        const minPrice = e.target.minPrice.value
        const photo = e.target.photo.value
        const description = e.target.description.value
        const verificationStatus = 'pending'
        console.log(title, location, date, maxPrice,minPrice, photo, description);
        const newProperties = { verificationStatus,maxPrice,minPrice, title, location, date,  photo, description, agentEmail, agentName }
        console.log(newProperties)

       




        //   });
        fetch(`https://assignment12-server-teal.vercel.app/NewProperties`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProperties)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added your post',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
            .catch(error => { console.log(error); })
    }
    return (
        <>
            <div className="mt-10">
                <h1 className="text-xl text-[#004274]  mb-7 font-semibold">Add Properties Here</h1>
                <form onSubmit={handleAddProperties}>

                    <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                        <div >
                            <div className="m-1 mb-3 text-lg text-gray-500 text-semibold">Property Title </div>
                            <input type="text" name="title" placeholder="enter your properties title" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Location</div>
                            <input name='location' placeholder="enter your properties location" type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >

                            <div htmlFor="Deadline" className="m-1 text-lg text-gray-500 text-semibold">Date</div>
                            <input type="date" name="date" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Max-Price</div>
                            <input name='maxPrice' type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Min-Price</div>
                            <input name='minPrice' type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Image URL </div>
                            <input type="photo" name="photo" placeholder="enter your photo url" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>

                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Description</div>
                            <input name='description' type="text" placeholder="enter your properties details" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>



                    </div>
                    <div className="text-center mt-7">
                        <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Add Properties
                        </button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default AddProperties;