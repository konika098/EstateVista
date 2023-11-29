import  { useEffect, useState } from 'react';

const Advertisement = () => {
    const [data, setData] = useState([]);
    


    useEffect(() => {
            fetch('http://localhost:5000/newAdvertisement')
           .then(res => res.json())
           .then(result => {
            setData(result)
          
           });
        },[]);
        const adsData = data.filter(item => item.verificationStatus === "verify")
    return (
       <>
       <h1 className='text-5xl mt-10 font-semibold mb-4 text-[#004274] text-center'>Advertisement</h1>
      <div className='grid grid-cols-3 gap-2'>
      {
       
       adsData.map(Data=> <div key={Data._id}>
           <div className="card w-96 bg-base-100  shadow-xl">
               <figure><img className="w-full h-[350px]" src={Data.photo} alt="" /></figure>
               <div className="card-body">
                   <h2 className="card-title">{Data.title}</h2>
                   <p>Location{Data.location}</p>
                   <p>Max-Price{Data.maxPrice}</p>
                   <p>Min-Price{Data.minPrice}</p>
                   <p className="text-yellow-600 font-semibold text-lg w-28 p-2">Verify:{Data.verificationStatus}</p>
                   <div className="card-actions justify-end flex">
                       <button  className="btn bg-[#004274] text-white">Details</button>
                       
                   </div>
               </div>
           </div>

       </div>)
      
      }
      </div>
       
       </>
    );
};

export default Advertisement;