import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import elfIcon from '../images/elfIcon.png';

const TopHeader = (props) => (
  <header >
    <div >
      <Header size='medium' textAlign='center' id='myHeader' >
        <Image src={elfIcon}  size='huge' onClick={props.handleFilteredItems} name='homePage'
        className='iconImage'/>
        <p id='myTitle'>Metro Pizza</p>
      </Header>
    </div>
  </header>
)
export default TopHeader;
