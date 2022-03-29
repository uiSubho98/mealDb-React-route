import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetail.css'

const FoodDetail = () => {
    const {foodId}=useParams();
    const [meal,setMeal] = useState({});

    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0])) // type is object
        console.log(meal)
    },[])

    return (
        <div className='card-details'>
            <div className="img">
                <img  className='food-img' src={meal.strMealThumb} alt=""/>
            </div>
            <div className="description">
                <h2 className='text-primary'>Name: {meal.strMeal}</h2>
                <h2 className='text-danger'>Category: {meal.strCategory}</h2>
                <p><span className='desc'>Description</span>:{meal.strInstructions}</p>
                <a className='yt-link' href={meal.strYoutube}>Watch Recipie In Youtube</a>

            </div>
        </div>
    );
};

export default FoodDetail;