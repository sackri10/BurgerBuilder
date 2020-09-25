import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const Burger=(props) => {
    let transformedIng = Object.keys(props.ingredients).map(
        (igKey)=>{ return [...Array(props.ingredients[igKey])]
            .map((_,i) => {
                return (
            <BurgerIngredients key={igKey+i} type={igKey}></BurgerIngredients>)
        })
        })
        .reduce((arr,el)=> {
            return arr.concat(el)
        },[]);
        if(transformedIng.length === 0)
        transformedIng=(<p>Please start adding Ingredients !</p>)

return (
<div className={classes.Burger}>
  <BurgerIngredients type="bread-top"></BurgerIngredients>
 {transformedIng}
  <BurgerIngredients type="bread-bottom"></BurgerIngredients>
</div>
)
}
export default Burger;


