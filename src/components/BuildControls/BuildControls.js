import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';
const controls=[ {label:'Salad',type:'salad'},
{label:'Meat',type:'meat'},
{label:'Cheese',type:'cheese'},
{label:'Bacon',type:'bacon'}
];
const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        addIngredient={() => props.addIngredient(ctrl.type)}
        removeIngredient={() => props.removeIngredient(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
    <div>Price : $ {props.price.toFixed(2)} </div>
    <button
      className={classes.OrderButton}
      onClick={props.purchaseHandler}
      disabled={!props.isPurchasable}
    >     
      Order Now
    </button>
  </div>
);


export default BuildControls
