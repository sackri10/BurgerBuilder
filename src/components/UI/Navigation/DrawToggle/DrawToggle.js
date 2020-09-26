import React from 'react'
import classes from './DrawToggle.module.css'

function DrawToggle(props) {
    return (
      <div onClick={props.toggleSideBar} className={classes.DrawerToggle}>
        <div />
        <div />
        <div />
      </div>
    );
}

export default DrawToggle
