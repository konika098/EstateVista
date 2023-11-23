import { FaFacebookF ,FaGoogle,FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <>
            <div>
                <div className="bg-[#004274] p-3 space-y-10 md:grid grid-cols-2 md:-mt-6 lg:grid-cols-4">
                    <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                        <h1 className="text-white text-xl font-medium ">Company</h1> <br />
                        <p className="text-white text-base hover:text-cyan-400 cursor-none"> A123 Lost Street <br /> Chandigarh,
                            PB 535022 <br /> India </p> <br />
                        <p className="text-white text-base hover:text-cyan-400 cursor-pointer"> <strong className="tracking-wide text-white font-normal">Phone:</strong> +91 7008090111 </p>
                        <p className="text-white text-base hover:text-cyan-400 cursor-pointer"> <strong className="tracking-wide text-white font-normal">Email:</strong> info@gmail.com </p>
                    </div>
                    <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                        <h1 className="text-white text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                        <ul className="mt-2 text-white ">
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Home</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                About Us</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Services</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Terms of service</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Privacy policy</a> </li>
                        </ul>
                    </div>
                    <div className="leading-9 md:w-3/4 md:order-4">
                        <h1 className="text-white text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
                        <ul className="mt-2 text-white ">
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400"> Web
                                Design</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400"> Web
                                Development</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Product Management</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Marketing</a> </li>
                            <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-cyan-400">
                                Graphic Design</a> </li>
                        </ul>
                    </div>
                    <div className="md:order-2 lg:order-last">
                        <h1 className="text-white text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                        <p className="text-white w-3/5 leading-7 mb-5 md:w-3/4"> Join 25,000+ others and never miss out on new
                            tips,tutorials, and more. </p> <input type="email" placeholder="Enter E-mail Here" className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:border border-orange-200 md:w-1/2 lg:w-3/5" />
                        <button className="text-white bg-cyan-400 p-1 -translate-x-1 rounded-br-xl "> Subscribe
                        </button>
                    </div>
                </div>
                <div className="bg-[#004274] p-3 flex flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
                    <div className="flex mx-3 justify-between space-x-20 md:flex-row text-white md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                        <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                        <p>Designed by <span className="text-white">Konika Khan</span></p>
                    </div>
                    <div className="text-white flex pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                        <a href="#" className="w-8 h-8 bg-cyan-400 hover:text-cyan-400  rounded-full  flex justify-center p-2 items-center hover:bg-gray-200">
                        <FaFacebookF />
                            </a> 
                            <a href="#" className="w-8 h-8 bg-cyan-400 hover:text-cyan-400 rounded-full  flex justify-center p-2 items-center hover:bg-gray-200">
                            <FaTwitter /></a> 

                                <a href="#" className="w-8 h-8 bg-cyan-400 hover:text-cyan-400 rounded-full flex justify-center p-2 items-center hover:bg-gray-200">
                                <FaInstagramSquare /></a>
                                     <a href="#" className="w-8 h-8 bg-cyan-400 hover:text-cyan-400 rounded-full  flex justify-center p-2 items-center hover:bg-gray-200">
                                     <FaLinkedinIn /></a> 
                                     <a href="#" className="w-8 h-8 bg-cyan-400 hover:text-cyan-400 rounded-full flex justify-center p-2 items-center hover:bg-gray-200">
                                     <FaGoogle /></a> 
                                            </div>
                </div>
            </div>



        </>
    );
};

export default Footer;