

const PropertiesAdd = () => {
    const handleAddProperties =e=>{
        e.preventDefault()
        const title =e.target.title.value
        const location =e.target.location.value
        const date =e.target.date.value
        const price =e.target.price.value
        const photo =e.target.photo.value
        const description =e.target.description.value
        console.log(title,location,date,price,photo,description);
    }
    return (
        <>
            <div className="mt-10">
                <h1 className="text-xl text-[#004274]  mb-7 font-semibold">Add Properties Here</h1>
                <form onSubmit={handleAddProperties}>

                    <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                        <div >
                            <div className="m-1 mb-3 text-lg text-gray-500 text-semibold">Property Title </div>
                            <input type="text" name="title" placeholder="enter your properties title" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Location</div>
                            <input name='location' placeholder="enter your properties location" type="text" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                           
                           <div htmlFor="Deadline" className="m-1 text-lg text-gray-500 text-semibold">Date</div>
                           <input type="date" name="date"  className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                       </div>
                       <div className>
                            <div className="m-1 text-lg text-gray-500 text-semibold">Price</div>
                            <input name='price' type="number" placeholder="enter your properties price" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Property Image</div>
                            <input type="photo" name="photo" placeholder="enter your photo url" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                       
                        <div >
                            <div className="m-1 text-lg text-gray-500 text-semibold">Description</div>
                            <input name='description' type="text" placeholder="enter your properties details" className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                        </div>
                       


                    </div>
                    <div className="text-center mt-7">
                        <button className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-[#004274] hover:bg-[#004274] hover:text-white font-medium m-2 mb-6 ">Add Properties
                        </button>

                    </div>
                </form>
            </div>

        </>
    );
};

export default PropertiesAdd;