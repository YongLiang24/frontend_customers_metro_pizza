import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import ItemModal from './ItemModal';
const ItemCard = (props) => (
  <div>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Image  size='small' src={props.img_url}/>
        <Card.Meta>$ {props.price}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra >
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add to Cart
          </Button>
          <Button basic color='red'>
            Details
          </Button>
        </div>
      </Card.Content>
</div>
)

export default ItemCard
