import React from 'react'
import classes from '../Toolbar/Toolbar.module.css'
import Logo from './../../../Logo/Logo';
import NavigationItems from './../NaviationItems/NavigationItems';
import DrawToggle from './../DrawToggle/DrawToggle';


const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle toggleSideBar={props.toggleSideBar} />
    <Logo height="80%" />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
