import React from 'react'
import Button from './../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients).map((igKey) => {
        return (<li style={{textTransform:'capitalize'}} key={igKey}>{igKey}: {props.ingredients[igKey]} </li>);
    });
    return (
      <div>
        <h1>Order Summary</h1>
        <div>Below are the ingredients for a delicious Burger Meal:</div>
        <ul>{ingredientsList}</ul>
         <strong>Total Price: $ {props.price.toFixed(2)}</strong>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={props.Cancel}>          
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.Continue}>
          Continue
        </Button>
      </div>
    );
}

export default OrderSummary
