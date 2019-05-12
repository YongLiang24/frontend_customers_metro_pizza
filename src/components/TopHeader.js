import React from 'react';
import { Header} from 'semantic-ui-react';
import DropDownMenu from './DropDownMenu';

const TopHeader = (props) => (
  <div id='myHeader'>
    <Header  >
      <DropDownMenu handleFilteredItems={props.handleFilteredItems} barSize={props.barSize}/>
    </Header>
  </div>
)
export default TopHeader;
