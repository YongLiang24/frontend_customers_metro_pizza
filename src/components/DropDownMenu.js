import React from 'react';
import {Dropdown, Button, Icon} from 'semantic-ui-react';

const DropDownMenu =(props)=>{
  return(
      <Dropdown basic inline icon=<Icon  name='bars' size={props.barSize}></Icon>>
        <Dropdown.Menu id="dropdown_background">
          <Button.Group vertical>
            <Button onClick={props.handleFilteredItems} name="homePage">Home Page</Button>
            <Button onClick={props.handleFilteredItems} name='cartButton'>Your Cart</Button>
            <a href="https://yongliang24.github.io/frontend_admin_metro_pizza/" target="_blank" rel="noopener noreferrer"><Button>Visit Administrator Site</Button></a>
          </Button.Group><hr/>
          <a href="https://github.com/YongLiang24" target="_blank" rel="noopener noreferrer">
            <Icon name="github" size='large' link/></a>
          <a href="https://www.linkedin.com/in/yongliang24/" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size='large' link/></a>
        </Dropdown.Menu>
      </Dropdown>
  )
}
export default DropDownMenu;
