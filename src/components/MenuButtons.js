import React from 'react';

const MenuButtons = (props)=>{
  return(
    <nav>
      <div className="four ui buttons ">
        <button className="ui button " onClick={props.handleFilteredItems} name='wingButton'>Wings</button>
        <button className="ui button active " onClick={props.handleFilteredItems} name='pizzaButton'>Pizza</button>
        <button className="ui button " onClick={props.handleFilteredItems} name='beverageButton'>Beverage</button>
        <button className="ui button shopping cart icon" onClick={props.handleFilteredItems} name='cartButton'> Cart
        </button>
      </div>
    </nav>
  )
}
export default MenuButtons;
