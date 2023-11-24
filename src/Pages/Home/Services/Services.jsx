import  { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(response => {
            return response.json()
           
          })
          .then(data => {
            setServices(data);
        
            console.log(data)
          })
    },[])
    return (
      <>
      <h1 className='text-5xl  text-[#004274] font-medium mb-16 mt-20'>Our Services</h1>
      <div className='grid grid-cols-3 gap-4'>
                {services.map(service => (
                    <div key={service.id}>
                        <img className='w-12 h-12' src={service.icon} alt="" />
                        <h2 className='text-xl text-[#004274] font-semibold mb-2 mt-2'>{service.serviceName}</h2>
                        <p className='text-md mb-10'>{service.description}</p>
                    </div>
                ))}
            </div>
      
      </>
    );
};

export default Services;