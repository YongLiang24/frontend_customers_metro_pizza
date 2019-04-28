import React from 'react';
import { Header, Image, Label, Icon, Button } from 'semantic-ui-react';
const MenuButtons = (props)=>{
  return(
    <div className="four ui buttons ">
      <button className="ui button " onClick={props.handleFilteredItems} name='wingButton'>Wings</button>
      <button className="ui button active " onClick={props.handleFilteredItems} name='pizzaButton'>Pizza</button>
      <button className="ui button " onClick={props.handleFilteredItems} name='beverageButton'>Beverage</button>
      <button className="ui button " onClick={props.handleFilteredItems} name='null'> Cart - <Label  spaced='right'  >
        <Icon name='shopping cart' spaced='right' size='large'/><strong>0</strong>
      </Label></button>

    </div>
  )
}
export default MenuButtons;
