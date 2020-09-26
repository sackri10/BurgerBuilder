import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from './../Navigation/NaviationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from './../Backdrop/Backdrop';
import Aux from './../../../hoc/Auxilary';

function SideDrawer(props) {
    let attachedClasses =[classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses =[classes.SideDrawer, classes.Open]
    }
    return (
      <Aux>
        <Backdrop show={props.open} clicked={props.sideDrawerClose} />
        <div className={attachedClasses.join(' ')}>
          <Logo height="11%" style={{ marginBottom: "32px" }} />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Aux>
    );
}

export default SideDrawer
