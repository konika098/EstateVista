

const Offer = () => {
    return (
      <>
      <div>
                <h1 className="text-2xl mt-10 text-[#004274] font-semibold">Add Your Advertisement Here </h1>
                <form  >
                    <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                    <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Title</div>
                            <input name='title' type="text" placeholder="enter your properties details" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Location</div>
                            <input name='location' placeholder="enter your properties location" type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >

                            <div htmlFor="Deadline" className="m-1 text-lg text-gray-500 text-semibold">Date</div>
                            <input type="date" name="date" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Max-Price</div>
                            <input name='maxPrice' type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Min-Price</div>
                            <input name='minPrice' type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Image URL </div>
                            <input type="photo" name="photo" placeholder="enter your photo url" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>

                       

                        <div className="text-center mt-7">
                            <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Add
                            </button>

                        </div>
                    </div>
                </form>
            </div >
      </>
    );
};

export default Offer;