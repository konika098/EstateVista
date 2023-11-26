import { useEffect, useState } from "react";
import SharedButton from "../../../Component/Loader/SharedButton/SharedButton";


const ManageProperties = () => {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        fetch("http://localhost:5000/NewPostProperties")
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
               <div className="overflow-x-auto w-full mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-[#004274] font-semibold">
                            <th>No.</th>
                            <th>Property Title</th>
                            <th>Property Location</th>
                            <th>Agent name</th>
                            <th>Agent email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((Data, index) => <tr key={Data._id} className="text-lg" >
                                <th>{index + 1}</th>
                                <td>{Data.title}</td>
                                <td>{Data.location}</td>
                                <td>{Data.agentName}</td>
                                <td>{Data.agentEmail}</td>
                               
                                <td >
                                <div className="flex gap-2">
                                <SharedButton icon={'https://i.ibb.co/YQR4xZ3/426713-200.png'} name={'Verify'}></SharedButton>
                                <SharedButton  icon={'https://i.ibb.co/bmcg1Xq/png-transparent-cancel-exit-reject-ui-close-interface-remove-uiux-line-icon.png'} name={'Reject'}></SharedButton>
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

            export default ManageProperties;