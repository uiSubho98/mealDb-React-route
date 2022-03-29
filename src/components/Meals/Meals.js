import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Restaurent from '../Restaurent/Restaurent';
import './Meals.css'


const Meals = () => {
    const[searchText , setSearchText] = useState('');
    const[inputText,setinputText]=useState('')
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data.meals));
    },[inputText])

    const searchFood = e =>{
        setSearchText(e.target.value)
    }
    const getInput=()=>{
        setinputText(searchText)
    }

    return (
        <>
         <Container  className='text-center  mt-4'>
        <input placeholder='Type Food Name' onChange={searchFood}  type="text" name="" id="" />
        <button onClick={getInput} className='bg-primary text-white rounded ms-2'>Search</button>
        <h3>Search Result:{meals.length}</h3>
        </Container>
        <div className='meal-cards'>
            {
                meals.map(meal=><Restaurent key={meal.idMeal} meal={meal}></Restaurent>)
            }
        </div>
        </>
       
    );
};

export default Meals;