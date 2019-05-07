import React from 'react';
import {Dropdown, Sticky, Button, Icon} from 'semantic-ui-react';

const DropDownMenu =(props)=>{
  return(
  <div id='menuIcon'>
    <Sticky>
      <Dropdown basic inline icon=<Icon  name='bars' size='big' ></Icon> >
        <Dropdown.Menu id="dropdown_background">
          <Button.Group vertical>
            <Button onClick={props.handleFilteredItems} name='pizzaButton'>Pizza Menu</Button>
            <Button onClick={props.handleFilteredItems} name='wingButton'>Wings Menu</Button>
            <Button onClick={props.handleFilteredItems} name='beverageButton'>Beverages Menu</Button>
            <Button ><a href="https://frontend-admin-metro-pizza.herokuapp.com/" target="_blank">To Administrator Site</a></Button>
          </Button.Group><hr/>
          <a href="https://github.com/YongLiang24" target="_blank">
            <Icon name="github" size='large' link/></a>
          <a href="https://www.linkedin.com/in/yongliang24/" target="_blank">
            <Icon name="linkedin" size='large' link/></a>
        </Dropdown.Menu>
      </Dropdown>
    </Sticky>
  </div>
  )
}
export default DropDownMenu;
