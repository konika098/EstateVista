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
            <Outlet/>
            <Footer/>

           

        </>
    );
};

export default Main;