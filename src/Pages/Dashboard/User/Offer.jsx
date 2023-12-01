import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Offer = () => {
    const {id}=useParams()
    const {user}=useContext(AuthContext)
    const offer =useLoaderData()
    console.log(offer,id);
    const handleOffer =e=>{
        e.preventDefault()
        const title =e.target.title.value
        const location =e.target.location.value
        const date = e.target.date.value
        const maxPrice = e.target.maxPrice.value
        const minPrice = e.target.minPrice.value
        const email = e.target.email.value
        const name = e.target.name.value
        const photo = offer?.photo
        .value
        const status ='pending'
        const offerDetails ={title,date,maxPrice,minPrice,name,email,status,photo,location

        }
        console.log(offerDetails);
        fetch(`https://assignment12-server-teal.vercel.app/offerDetails`, {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(offerDetails)

    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added your offer',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            }
        })
        .catch(error => { console.log(error); })
    }
    
    
  
    
    return (
      <>
      <div className="mr-10">
                <h1 className="text-2xl mt-10 text-[#004274] font-semibold">Add offer </h1>
                <form onSubmit={handleOffer} >
                    <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                   
                    <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Title</div>
                            <input name='title' value={offer.title} type="text" placeholder="enter your properties details" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Location</div>
                            <input name='location' value={offer.location}  placeholder="enter your properties location" type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >

                            <div htmlFor="Deadline" className="m-1 text-lg text-gray-500 text-semibold">Date</div>
                            <input type="date" name="date" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Max-Price</div>
                            <input name='maxPrice' value={offer.maxPrice}  type="number" placeholder="enter your offer price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Min-Price</div>
                            <input name='minPrice' defaultValue={offer.minPrice} type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Buyer E-mail </div>
                            <input type="text"value={user.email}  name="email" placeholder="enter your photo url" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Buyer Name </div>
                            <input type="text" value={user?.name} name="name" placeholder="" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>

                       

                        <div className="text-center mt-7">
                            <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Add
                            </button>

                        </div>
                    </div>
                </form>
            </div >
      </>
    );
};

export default Offer;