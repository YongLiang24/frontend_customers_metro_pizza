import React from 'react';
import { Card, Image, Button} from 'semantic-ui-react';
const OrderCard = (props)=>{
  return(
    <Card centered className="outterCard" id='cart_list'>
      <Card.Content>
        <Card.Header>{props.itemName}</Card.Header>
        <Image src={props.img_url} size='tiny' id='cart_img'/>
        <Card.Meta >$ {props.price}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={props.handleRemoveItem}  value={props.index} negative id='CartRemoveButton' centered='true'>Remove</Button>
      </Card.Content>
    </Card>
  )
}

export default OrderCard
