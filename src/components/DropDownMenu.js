import React from 'react';
import {Dropdown, Sticky, Button, Icon, Card} from 'semantic-ui-react';

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
            <Button ><a href="https://frontend-admin-metro-pizza.herokuapp.com/" target="_blank">To Management Site</a></Button>
          </Button.Group>
          <br/><Icon name="github" size='large'/><Icon name="linkedin" size='large'/><Icon name="facebook" size='large'/><Icon name="twitter" size='large'/>
        </Dropdown.Menu>
      </Dropdown>
    </Sticky>
  </div>
  )
}
export default DropDownMenu;
