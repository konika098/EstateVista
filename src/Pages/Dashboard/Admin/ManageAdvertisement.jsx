import { useEffect, useState } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const ManageAdvertisement = () => {
    const [data, setData] = useState([])
    const axiosSecure = useAxiosSecure();
    const loaderData = useLoaderData();

    useEffect(() => {
        setData(loaderData);
    }, [loaderData]);

    const setVerify = (id) => {
        axiosSecure.put(`/Verify/${id}`)
            .then((res) => {
                console.log(res);
                updateVerificationStatus(id, "Verified");
            })
            .catch((error) => console.error("Error updating verification status:", error));
    };
    const setReject = (id) => {
        axiosSecure.put(`/Reject/${id}`)
            .then((res) => {
                console.log(res);
                updateVerificationStatus(id, "Rejected");
            })
            .catch((error) => console.error("Error updating verification status:", error));
    };

    const updateVerificationStatus = (id, newStatus) => {
        setData((prevData) =>
            prevData.map((item) =>
                item._id === id ? { ...item, verificationStatus: newStatus } : item
            )
        );
    };

    
    return (
        <>


            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-[#004274] font-semibold">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <tr key={item._id} className="text-lg" >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photo} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.location}</td>
                                <td>{item.maxPrice}</td>
                                <td>{item.verificationStatus}</td>
                                <td >
                                <div className="flex gap-2">
                                    <button onClick={() => setVerify(item._id)} className="btn-one text-black"><IoShieldCheckmarkSharp /></button>
                                    <button onClick={() => setReject(item._id)} className="btn-one text-black" ><ImCross /></button>
                               
                                </div></td>

                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageAdvertisement;