import { useNavigate, useParams } from 'react-router-dom';
import './Category.css';
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import MealList from './MealList';
import Preloader from './Preloader';

function Category()
{
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const [loading,setLoading]=useState(true);
    const navigate = useNavigate();
    let goBack = () => navigate(-1);
    useEffect
    (
        () => 
        {
            setLoading(true);
            getFilteredCategory(name)
            .then(data =>  
                {setMeals(data.meals); 
                 setLoading(false);});
        },[name]
    );

    return (
        <div className='wrap'>
            {
            loading ? (<Preloader />) :
             (<MealList meals={meals} />)
            }
            <br></br>
            {/* сделала так потому что у меня очень долго все грузит */}
            {!loading &&<button className='btn' onClick={goBack}>Go back</button>}
        </div>
    )
}
export default Category;