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
               <p>{strCategoryDescription}</p>
          
           
             <div className='card-action'>
               <a href='#1'>Watch category</a>
             </div> 
           </div>
        </div>
    )
}
export default CategoryItem;