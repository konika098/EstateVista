import React, { useEffect, useState } from "react";
import SharedButton from "../../../Component/Loader/SharedButton/SharedButton";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const ManageProperties = () => {
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
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
            <div className="overflow-x-auto w-full mt-10">
                <table className="table">
                    <thead>
                        <tr className="text-xl text-[#004274] font-semibold">
                            <th>No.</th>
                            <th>Property Title</th>
                            <th>Property Location</th>
                            <th>Agent name</th>
                            <th>Agent email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item._id} className="text-lg">
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.location}</td>
                                <td>{item.agentName}</td>
                                <td>{item.agentEmail}</td>
                                <td>{item.verificationStatus}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button onClick={() => setVerify(item._id)} className="btn">Verify</button>
                                        <button onClick={() => setReject(item._id)} className="btn">Reject</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageProperties;