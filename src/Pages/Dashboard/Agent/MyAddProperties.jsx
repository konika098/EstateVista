import { useEffect, useState } from "react";



const MyAddProperties = () => {
    const [data, setData] = useState([])

    const fetchUserData = () => {
        fetch("https://assignment12-server-teal.vercel.app/NewPostProperties")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
                console.log(data)
            })
    }
    useEffect(() => {
        fetchUserData()
    }, [])
   

    return (
        <>

            <div className="grid grid-cols-2 gap-2 w-full mt-10">
                {

                    data.map(Data => (
                        <div key={Data.id}>
                            <div className="card w-full bg-base-100  shadow-xl">
                                <figure><img className="w-full h-[350px]" src={Data.photo} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{Data.title}</h2>
                                    <p>Location{Data.location}</p>
                                    <p>Max-Price{Data.maxPrice}</p>
                                    <p>Min-Price{Data.minPrice}</p>
                                    <p className="text-yellow-600 font-semibold text-lg w-28 p-2">Verify:{Data.verificationStatus}</p>
                                    <div className="card-actions justify-end flex">
                                        <button className="btn bg-[#004274] text-white">Update</button>
                                        <button className="btn bg-[#004274] text-white">Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }

                
            </div >
        </>
    );
};

export default MyAddProperties;