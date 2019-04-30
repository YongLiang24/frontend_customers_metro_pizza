import React from 'react';
import { Card, Image, TextArea} from 'semantic-ui-react';
const OrderCard = (props)=>{
  return(
    <Card.Content>
      <Image  size='tiny' src={props.img_url} />
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>${props.price}</Card.Meta>
      <Card.Description>
        <TextArea placeholder="Special Instructions"/>
      </Card.Description>
    </Card.Content>
  )
}

export default OrderCard
