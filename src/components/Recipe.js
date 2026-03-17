import { useNavigate, useParams } from 'react-router-dom';
import './Recipe.css';
import { useEffect, useState } from 'react';
import { getMealById } from '../api';
import Preloader from './Preloader';

function Recipe()
{
    const {id} = useParams();
    const [recipe,setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(
        () => 
            {   
                setLoading(true);
                getMealById(id)
                .then((data) => {setRecipe(data.meals[0]); setLoading(false)})
            }, [id]);

    if (loading) return <Preloader />;
    return(
        <div className='wrap'>
            <div className='recipe'>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <div>Category: <h3>{recipe.strCategory}</h3></div>
                {recipe.strArea ? <div>Area: <h4>{recipe.strArea}</h4></div> : null }
                <p>{recipe.strInstructions}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map
                            (
                                key =>
                                {
                                    if(key.includes('Ingredient') && recipe[key])
                                    {
                                        return(
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                            </tr>
                                        )
                                    }
                                }
                            )
                        }
                    </tbody>
                </table>
                {
                    !(recipe.strYoutube) ? null :
                    (
                        <div>
                            <h4>Video recipe</h4>
                            <div className='video-wrap'>
                                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
                            </div>
                        </div>
                    ) 
                }
            </div>

            {!loading &&<button className='btn' onClick={goBack}>Go back</button>}
        </div>
    )
}
export default Recipe;