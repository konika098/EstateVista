import { useEffect, useState } from "react";
import SharedButton from "../../../Component/Loader/SharedButton/SharedButton";


const ManageAdvertisement = () => {
    const [data, setData] = useState([])
    const fetchUserData = () => {
        fetch("http://localhost:5000/newAdvertisement")
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


            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-[#004274] font-semibold">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((Data, index) => <tr key={Data._id} className="text-lg" >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={Data.photo} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{Data.location}</td>
                                <td>{Data.maxPrice}</td>
                                <td >
                                <div className="flex gap-2">
                                <SharedButton icon={'https://i.ibb.co/YQR4xZ3/426713-200.png'} name={'Verify'}></SharedButton>
                                <SharedButton  icon={'https://i.ibb.co/bmcg1Xq/png-transparent-cancel-exit-reject-ui-close-interface-remove-uiux-line-icon.png'} name={'Reject'}></SharedButton>
                                </div>                                </td>

                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </>
    );
};

export default ManageAdvertisement;