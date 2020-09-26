import React from 'react'
import image from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'
const Logo= (props) => 

    (    <div className={classes.Logo} style={{height: props.height}}>
            <img src={image} alt="BurgerLogo"></img>
        </div>
    )

export default Logo
