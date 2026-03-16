import { API_URL } from "./config";

const getAllCategories = async()=>
{
    const response = await fetch(API_URL + '/categories.php');
    return await response.json();
}

const getMealBy = async(idMeal)=>
{
    const response = await fetch(API_URL + '/lookup.php?i=' + idMeal);
    return await response.json();
}

const getFilteredCategory = async(carName)=>
{
    const response = await fetch(API_URL + '/filter.php?c=' + carName);
    return await response.json();
}
export {getMealBy, getAllCategories, getFilteredCategory}