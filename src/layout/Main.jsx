
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/navbar/Navbar';
import Footer from '../pages/Shared/footer/Footer';

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;