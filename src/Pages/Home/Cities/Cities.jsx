import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'


const Cities = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
      }, []);
    return (
        <>
            <div className="mt-10  mb-10 flex justify-center text-center mx-auto ">
                <div>
                    <h1 className="text-md  uppercase font-semibold text-[#004274]">explore cities</h1>
                    <h1 className="text-4xl font-semibold">Find out more the real estate market in UAE</h1>
                    <p data-aos="fade-right" className="text-xl mt-2">Find your dream neighborhood and explore it with your home purchase advisor. We are here to help you <br />
                        find the perfect home for you.</p>
                    <div   className="flex gap-2 mt-8">
                        <div  className="relative">
                            <img  className=" w-[450px] h-[600px]  opacity-50 hover:opacity-100" src="https://i.ibb.co/jygDPs6/pexels-photo-10902490.jpg" alt="" />
                            <div className="absolute top-2 font-semibold ml-2 text-black bg-white p-2 rounded-tl-2xl rounded-br-2xl">
                                <h1>12 Properties</h1>
                                <h1 className="text-xl">Dubai</h1>
                            </div>
                        </div>
                        <div  data-aos="fade-up" className="mt-14 relative">
                            <img className="w-[450px] h-[600px]  opacity-50 hover:opacity-100" src="https://i.ibb.co/0FpSTLZ/pexels-photo-8384929.jpg" alt="" />
                            <div className="absolute top-2 font-semibold ml-2 text-black bg-white p-2 rounded-tl-2xl rounded-br-2xl ">
                                <h1>13 Properties</h1>
                                <h1 className="text-xl">Sharjah</h1>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="relative">
                            <img className="w-[450px] h-[600px]  opacity-50 hover:opacity-100" src="https://i.ibb.co/0FwQnCW/pexels-photo-2689619.jpg" alt="" />
                            <div className="absolute top-2 font-semibold ml-2 text-black bg-white p-2 rounded-tl-2xl rounded-br-2xl ">
                                <h1>16 Properties</h1>
                                <h1 className="text-xl">Abu Dhabi</h1>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-14 relative">
                            <img className="w-[450px] h-[600px] opacity-50 hover:opacity-100" src="https://i.ibb.co/m6X00V8/pexels-photo-2214035.jpg" alt="" />
                            <div className="absolute top-2 font-semibold text-black bg-white p-2 rounded-tl-2xl rounded-br-2xl ml-2">
                                <h1>15 Properties</h1>
                                <h1 className="text-lg">Ajman</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cities;