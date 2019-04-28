import React from 'react';
import { Header, Image, Label, Icon, Button } from 'semantic-ui-react';
import elfIcon from '../images/elfIcon.png';

const TopHeader = () => (
  <header>

    <Header size='medium' textAlign='center' id='myHeader'>
      <Image src={elfIcon}  size='huge'/>
      <p id='myTitle'>Pizza Metro</p>
    </Header>

  </header>
)
export default TopHeader;
