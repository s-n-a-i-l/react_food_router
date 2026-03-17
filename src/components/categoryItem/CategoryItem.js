import { Link } from 'react-router-dom';
import './CategoryItem.css';
import { useState } from 'react';

function CategoryItem(props)
{
    const {strCategory, strCategoryThumb, strCategoryDescription}= props;
    const [zoom, setZoom] = useState(false);
    return(
        <div className='card'>
           <img className={zoom ? "zoomed" : ""} 
           onClick={() => setZoom(!zoom)} 
           src={strCategoryThumb} alt={strCategory}/>
           
           <div className='text'>
               <h2>{strCategory}</h2>
               <p>{strCategoryDescription.slice(0,80)}...</p>
          
           
             <div className='card-action'>
               <Link to={`/category/${strCategory}`}>Watch category</Link>
             </div> 
           </div>
        </div>
    )
}
export default CategoryItem;