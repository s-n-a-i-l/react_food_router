import './Home.css';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import Preloader from '../../components/Preloader';
import CategoryList from '../../components/categoryList/CategoryList';


function Home() {
    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect
    (
        () => {
             setLoading(true);
             getAllCategories()
             .then((data) => {
                setCatalog(data.categories);
                setLoading(false); 
             }).catch(() => setLoading(false));

        },[]
    );
    return (
        <div className='wrap'>
            {loading ? (<Preloader />) : 
            (<CategoryList catalog={catalog} />)}
        </div>
    )
}
export default Home;