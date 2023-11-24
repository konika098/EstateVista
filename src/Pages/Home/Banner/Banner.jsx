

import Button from './Button/Button';



const Banner = () => {
    return (
        <>
       
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/vLXfv0w/pexels-photo-6969866.jpg)' }}>
                <div className="hero-overlay "></div>
                <div  className="hero-content text-center text-neutral-content">
                    <div   className="max-w-xl">
                        <h1  className="mb-5 text-4xl text-white font-bold">Discover exclusive life style with a leading provider of high-end quality real estate</h1>
                        <p className='text-white mb-2 text-lg'>Packed with 100+ new features and improvements, it is the biggest all-in-one solution for real estate companies and professionals </p>
                        <Button/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;