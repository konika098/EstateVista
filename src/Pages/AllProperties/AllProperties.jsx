import { Link, useLoaderData } from "react-router-dom";


const AllProperties = () => {
    const data = useLoaderData()
    console.log(data)
  


    const allProperties = data?.filter(item => item.verificationStatus === "verify")



    return (
        <>
            <div className="grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-3 mb-10 mt-10">
                {
                    allProperties.map(Data => <div key={Data._id}>
                        <div className="card w-96 bg-base-100  shadow-xl">
                            <figure><img className="w-full h-[350px]" src={Data.photo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{Data.title}</h2>
                                <p>Location{Data.location}</p>
                                <p>Max-Price{Data.maxPrice}</p>
                                <p>Min-Price{Data.minPrice}</p>
                                <p className="text-yellow-600 font-semibold text-lg w-28 p-2">Verify:{Data.verificationStatus}</p>
                                <div className="card-actions justify-end flex">
                                    <Link to={`/AllProperties/${Data?._id}`}><button className="btn bg-[#004274] text-white">Details</button></Link>

                                </div>
                            </div>
                        </div>

                    </div>)
                }
               
            </div>

        </>
    );
};

export default AllProperties;