import React from 'react';
const MenuButtons = (props)=>{
  return(
      <div className="four ui buttons fluid">
        <button className="ui button " onClick={props.handleFilteredItems} name='wingButton'>Wings & Sides</button>
        <button className="ui button " onClick={props.handleFilteredItems} name='pizzaButton'>Pizza</button>
        <button className="ui button " onClick={props.handleFilteredItems} name='beverageButton'>Beverages</button>
        <button className="ui button shopping cart icon" onClick={props.handleFilteredItems} name='cartButton'> Cart - {props.itemCount}
        </button>
      </div>
  )
}
export default MenuButtons;
