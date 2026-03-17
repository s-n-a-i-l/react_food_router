
import Meal from './Meal';
import './MealList.css';

function MealList({meals})
{
        return(
            <div className='list'>
                    {
                        meals.map
                        (
                            meal =>
                            (
                                <Meal key={meal.idMeal} {...meal}></Meal>
                            )
                        )
                    }
            </div>
        )
}
export default MealList;