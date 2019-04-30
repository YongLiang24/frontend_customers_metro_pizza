import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import elfIcon from '../images/elfIcon.png';

const TopHeader = () => (
  <header>
    <Header size='medium' textAlign='center' id='myHeader'>
      <Image src={elfIcon}  size='huge'/>
      <p id='myTitle'>Metro Pizza </p>
    </Header>
  </header>
)
export default TopHeader;
