import React, { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Property = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch(`https://assignment12-server-teal.vercel.app/offerDetails`, {

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
    })
    return (
        <>
         <div className='flex gap-2 mr-5 mt-10'>
         {
                Data.map(items => <div key={items.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={items?.photo} alt="" /></figure>
                        <div className="card-body font-semibold">
                            <h2 className="card-title ">{items.title}</h2>
                            <p>Location: {items.location}</p>
                            <p>Offer Price: {items.minPrice}</p>
                            <p className='text-orange-600'>Status: {items.status}</p>
                            <button className='btn-one'>Pay Now</button>
                          
                        </div>
                    </div>

                </div>)
            }
         </div>
        </>
    );
};

export default Property;