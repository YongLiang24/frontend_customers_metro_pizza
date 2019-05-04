import React from 'react';
import { Card, Image} from 'semantic-ui-react';
const OrderCard = (props)=>{
  return(
    <Card.Content>
      <Card.Header>{props.itemName}</Card.Header>
      <Image  size='tiny' src={props.img_url} />
      <Card.Meta>${props.price}</Card.Meta>
      <Card.Description>
      </Card.Description>
      <button onClick={props.handleRemoveItem} value={props.index} className="ui negative basic button mini">Remove</button>
    </Card.Content>
  )
}

export default OrderCard
