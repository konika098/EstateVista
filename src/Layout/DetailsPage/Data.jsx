import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const Data = () => {
    const data =useLoaderData()
    return (
       <>
       {
        data.map(details=><Details key={details.id} details={details}></Details>)
       }


       </>
    );
};

export default Data;