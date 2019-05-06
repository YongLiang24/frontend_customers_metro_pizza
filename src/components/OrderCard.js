import React from 'react';
import { Card, Image, Button} from 'semantic-ui-react';
const OrderCard = (props)=>{
  return(
    // <Card.Content>
    //   <Card.Header>{props.itemName}</Card.Header>
    //   <Image  size='tiny' src={props.img_url} />
    //   <Card.Meta>${props.price}</Card.Meta>
    //   <Card.Description>
    //   </Card.Description>
    //   <button onClick={props.handleRemoveItem} value={props.index} className="ui negative basic button mini">Remove</button>
    // </Card.Content>

    <Card centered className="outterCard" id='cart_list'>
      <Card.Content>
        <Card.Header>{props.itemName}</Card.Header>
        <Image src={props.img_url} size='tiny' />
        <Card.Meta >$ {props.price}</Card.Meta>
      </Card.Content>
      <Card.Content extra centered='true'>
        <Button onClick={props.handleRemoveItem} fluid value={props.index} negative>Remove</Button>
      </Card.Content>
    </Card>
  )
}

export default OrderCard
