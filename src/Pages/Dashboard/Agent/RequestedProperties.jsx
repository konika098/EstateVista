import { useEffect, useState } from 'react';

const RequestedProperties = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/offerDetails`, {

            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)


            })
            .catch(error => { console.log(error); })
    },[])

    const handleAccept = async (id) => {

        fetch(`http://localhost:5000//Accept/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'Accepted' }),
        });




        setData(prevData =>
            prevData.map(item => (item._id === id ? { ...item, status: 'Accepted' } : item))
        );



    };

    const handleReject = async (id) => {

        fetch(`http://localhost:5000/reject/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'Rejected' }),
        });



        // Update local state to reflect the change
        setData(prevData =>
            prevData.map(item => (item._id === id ? { ...item, status: 'Rejected' } : item))
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
                            <th>Buyer Email</th>
                            <th>Buyer Name</th>
                            <th>Offer Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item, index) => (
                            <tr key={item._id} className="text-lg">
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.location}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td>{item.minPrice}</td>
                                <td>{item.status}</td>

                                <td>
                                    {
                                        item.status === 'Accepted' ?
                                            <>
                                                {item.status}
                                            </>
                                            :
                                            <>
                                                {
                                                    item.status === 'Rejected' ?
                                                        <>{item.status}</>
                                                        :
                                                        <>
                                                            <button  onClick={() => handleAccept(item._id)} className="btn-one">Accept </button>
                                                        </>
                                                }
                                            </>
                                    }
                                </td>
                                <td>
                                    {
                                        item.status === 'Accepted' ?
                                            <>
                                                {item.status}
                                            </>
                                            :
                                            <>
                                                {
                                                    item.status === 'Rejected' ?
                                                        <>{item.status}</>
                                                        :
                                                        <>
                                                            <button onClick={() => handleReject(item._id)} className="btn-one">Reject</button>
                                                        </>
                                                }
                                            </>
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default RequestedProperties;