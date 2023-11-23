import Headroom from 'react-headroom';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Headroom>
               <Header/>
            </Headroom>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet/>
            </div>
            
            <Footer/>

           

        </>
    );
};

export default Main;