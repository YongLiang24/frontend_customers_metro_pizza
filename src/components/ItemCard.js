import React from 'react';
import { Button, Card, Image, Header, Modal} from 'semantic-ui-react';
const ItemCard = (props) => (
  <div>
    <Card.Content id="cardContent">
      <Card.Header>{props.name}</Card.Header>
      <Image  size='small' src={props.img_url} id='itemImages'/>
      <Card.Meta>$ {props.price}</Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra >
      <div className='ui two buttons'>
        <Button basic color='teal' onClick={props.handleAddToCart} value={props.itemName}>
        Add to Cart  </Button>
        <Modal trigger={<Button onClick={props.handleModalOpen}>Details</Button>} size='large' id="modalItem" open={props.modalOpen} onClose={props.handleModalClose}>
          <Modal.Header>{props.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={props.img_url} />
            <Modal.Description>  <Header>Item Name</Header> <p>{props.description}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions id="modalButtons">
            <Button color='black' onClick={props.handleModalClose}>Back</Button>
            <Button positive  content="Add to Cart"  onClick={props.handleAddToCart} value={props.itemName}/>
          </Modal.Actions>
        </Modal>
      </div>
    </Card.Content>
</div>
)

export default ItemCard
