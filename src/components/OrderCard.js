import React from 'react';
import { Card, Image, TextArea} from 'semantic-ui-react';
const OrderCard = (props)=>{
  return(
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Image  size='tiny' src={props.img_url} />
      <Card.Meta>${props.price}</Card.Meta>
      <Card.Description>
        <TextArea placeholder="Special Instructions"/>
      </Card.Description>
      <button onClick={props.handleRemoveItem} value={props.index} className="ui negative basic button mini">Remove</button>
    </Card.Content>
  )
}

export default OrderCard
