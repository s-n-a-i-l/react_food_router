import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout()
{
    return(
        <div> 
            <Header />
            <main className='content'>
                {/* отображает дочерние маршруты в родительских компонентах */}
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
}
export default Layout;