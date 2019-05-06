import React from 'react';
import { Header, Image, Icon, Sticky} from 'semantic-ui-react';
import elfIcon from '../images/elfIcon.png';
import DropDownMenu from './DropDownMenu';

const TopHeader = (props) => (
  <header >
    <div >
      <Header size='medium' textAlign='center' id='myHeader' fluid='true'>
        <DropDownMenu handleFilteredItems={props.handleFilteredItems}/>
        <Image src={elfIcon}  size='huge' onClick={props.handleFilteredItems} name='homePage'
        className='iconImage'/>
        <p id='myTitle'>Metro Pizza</p>
      </Header>
    </div>
  </header>
)
export default TopHeader;
