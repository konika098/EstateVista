

const Footer = () => {
    return (
        <>
            <div>
                <div className="bg-gray-700 p-3 space-y-10 md:grid grid-cols-2 md:-mt-6 lg:grid-cols-4">
                    <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                        <h1 className="text-orange-400 text-xl font-medium">Company</h1> <br />
                        <p className="text-gray-300/80 text-base hover:text-yellow-300 cursor-none"> A123 Lost Street <br /> Chandigarh,
                            PB 535022 <br /> India </p> <br />
                        <p className="text-gray-200/80 text-base hover:text-yellow-300 cursor-pointer"> <strong className="tracking-wide text-orange-400 font-normal">Phone:</strong> +91 7008090111 </p>
                        <p className="text-gray-200/80 text-base hover:text-yellow-300 cursor-pointer"> <strong className="tracking-wide text-orange-400 font-normal">Email:</strong> info@gmail.com </p>
                    </div>
                    <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                        <ul className="mt-2 text-gray-300/80">
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Home</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                About Us</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Services</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Terms of service</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Privacy policy</a> </li>
                        </ul>
                    </div>
                    <div className="leading-9 md:w-3/4 md:order-4">
                        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
                        <ul className="mt-2 text-gray-300/80">
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300"> Web
                                Design</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300"> Web
                                Development</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Product Management</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Marketing</a> </li>
                            <li> <i className="fa fa-chevron-right text-orange-400" /> <a href="#" className="hover:text-yellow-300">
                                Graphic Design</a> </li>
                        </ul>
                    </div>
                    <div className="md:order-2 lg:order-last">
                        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                        <p className="text-gray-300/80 w-3/5 leading-7 mb-5 md:w-3/4"> Join 25,000+ others and never miss out on new
                            tips,tutorials, and more. </p> <input type="email" placeholder="Enter E-mail Here" className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:border border-orange-600 md:w-1/2 lg:w-3/5" />
                        <button className="text-white bg-orange-400 p-1 -translate-x-1 rounded-br-xl hover:bg-orange-500"> Subscribe
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 p-3 flex flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
                    <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                        <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                        <p>Designed by <span className="text-orange-400">TailwindCSS</span></p>
                    </div>
                    <div className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                        <a href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i className="fa fa-twitter" /></a> <a href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i className="fa fa-instagram" /></a> <a href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i className="fa fa-facebook" /></a> <a href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i className="fa fa-google" /></a> <a href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i className="fa fa-linkedin" /></a> </div>
                </div>
            </div>



        </>
    );
};

export default Footer;