import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Restaurent.css'

const Restaurent = ({meal}) => {
    const{idMeal,strMeal,strCategory,strInstructions,strMealThumb}=meal;
    const navigate=useNavigate();
    const foodDetail=() =>{
        const path =`/meal/${idMeal}`;
        navigate(path)
    }
    
    return (
        <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className='card-name'>{strMeal}</Card.Title>
            <h5>Category: {strCategory}</h5>
          <Card.Text>
           {strInstructions.slice(0,40)}...<span className='Read-More'>Read More</span>
          </Card.Text>
          <Button  onClick={foodDetail} size="lg" variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    );
};

export default Restaurent;