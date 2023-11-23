import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <>
        <div className="flex justify-center mx-auto mt-20">
            <div className="flex flex-col items-center">
            <img src="../../../public/comp_3.gif" alt="" />
            <div className="flex gap-2 items-center justify-center">
            <h1 className=" text-2xl font-semibold">Go Home </h1>
           <Link to='/' className="text-3xl"> <GoArrowRight /></Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default Error;