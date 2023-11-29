import Headroom from 'react-headroom';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto'>
            <Headroom>
               <Header/>
            </Headroom>
            <div className="min-h-[calc(100vh-300px)]">
            <Outlet/>
            </div>
            
            <Footer/>
            </div>

           

        </>
    );
};

export default Main;