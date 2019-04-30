import React from 'react';
import { Button, Card, Image, Header, Modal} from 'semantic-ui-react';
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
          <Button basic color='teal' onClick={props.handleAddToCart} value={props.itemName}>
            Add to Cart
          </Button>
          <Modal trigger={<Button>Details</Button>} size='large'>
            <Modal.Header>{props.name}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={props.img_url} />
              <Modal.Description>
                <Header>Item Name</Header>
                <p>{props.description}</p>
              </Modal.Description>

            </Modal.Content>
                      <Modal.Actions>
                    <Button color='black' onClick={props.close}>
                      Nope
                    </Button>
                    <Button color='black' onClick={props.close}>
                      Nope
                    </Button>
                    <Button
                      positive
                      icon='checkmark'
                      labelPosition='right'
                      content="Yep, that's me"
                      onClick={props.close}
                    />
                  </Modal.Actions>
          </Modal>
        </div>
      </Card.Content>
</div>
)

export default ItemCard
