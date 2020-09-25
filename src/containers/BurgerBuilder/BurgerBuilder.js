import React, { Component } from 'react'
import BuildControls from '../../components/BuildControls/BuildControls';
import Aux from '../../hoc/Auxilary'
import Burger from './../../components/Burger/Burger';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/OrderSummary/OrderSummary';

const ING_PRICES ={
    salad:0.5,cheese:0.4,meat:1.5,bacon:0.7
}
export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const IngCopyState = { ...this.state.ingredients };
    IngCopyState[type] = updatedCount;
    const priceAddition = ING_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ ingredients: IngCopyState, totalPrice: newPrice });
    this.updateIsPurchasable(IngCopyState);
  };
  updateIsPurchasable(newing) {
    let allIngValue = 0;
    Object.keys(newing).forEach((key) => {
      allIngValue += newing[key];
    });
    let isPurchasable = false;
    if (allIngValue > 0) {
      isPurchasable = true;
    }
    this.setState({ purchasable: isPurchasable });
  }
  removeIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] - 1;
    const IngredientsCopy = { ...this.state.ingredients };
    IngredientsCopy[type] = newCount;
    const priceRemoved = ING_PRICES[type];
    const newPrice = this.state.totalPrice - priceRemoved;
    this.setState({ ingredients: IngredientsCopy, totalPrice: newPrice });
    this.updateIsPurchasable(IngredientsCopy);
  };
  OrderNow = () => {
    this.setState({ purchasing: true });
  };
  CloseOrderSummary = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.CloseOrderSummary}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            Cancel={this.CloseOrderSummary}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          isPurchasable={this.state.purchasable}
          price={this.state.totalPrice}
          purchaseHandler={this.OrderNow}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder
