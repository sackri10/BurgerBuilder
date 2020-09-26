import React,{Component} from 'react'
import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css'
import Toolbar from './../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from './../UI/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  toggleSideBar=() =>{
    const sideBar = this.state.showSideDrawer;;
    this.setState({ showSideDrawer: !sideBar });
  }
  render() {
    return (
      <Aux>
        <Toolbar toggleSideBar={this.toggleSideBar}></Toolbar>
        <SideDrawer
          open={this.state.showSideDrawer}
          sideDrawerClose={this.sideDrawerClosedHandler}
        />

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout
