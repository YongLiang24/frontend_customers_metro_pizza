import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const ItemModal = (props) => (
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
)

export default ItemModal
