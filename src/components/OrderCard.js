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
      <Card.Content extra centered='true'>
        <Button onClick={props.handleRemoveItem} fluid value={props.index} negative className='mainPageDiv'>Remove</Button>
      </Card.Content>
    </Card>
  )
}

export default OrderCard
