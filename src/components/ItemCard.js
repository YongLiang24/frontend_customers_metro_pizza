import React from 'react';
import { Button, Card, Image, Modal, Header} from 'semantic-ui-react';
const ItemCard = (props) => (
    <Card centered className="outterCard">
      <Image src={props.img_url} size='medium' centered className='item_card' />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>$ {props.price}</Card.Meta>
        <Card.Description><strong>{props.description}</strong></Card.Description>
      </Card.Content>
      <Card.Content extra >
        <Modal
          trigger={  <Button fluid color='teal' onClick={props.handleAddToCart} value={props.itemName}>Add to Cart</Button>}
          header={`"${props.name}" has been added to your cart.`}
          actions={[{ key: 'done', content: 'Okay', positive: true, fluid: true}]}
          style={{textAlign: "center"}} size='small'
        />
      </Card.Content>
    </Card>
)
export default ItemCard
