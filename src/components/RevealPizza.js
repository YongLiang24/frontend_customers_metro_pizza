import React from 'react'
import { Image, Reveal, Popup } from 'semantic-ui-react'
import PizzaCover from '../images/PizzaCover.png'
import PizzaImage from '../images/PizzaImage.png'

const RevealPizza = (props) => (
  <Reveal animated='small fade' id="RevealContents" >
    <Reveal.Content visible>
      <Popup content=<p>Metro Pizza is an application which allows customers to place pizza orders online and send orders to the Administrator site.<a href="https://yongliang24.github.io/frontend_admin_metro_pizza/" target="_blank" rel="noopener noreferrer">Link to Administrator</a>. <strong>Note: Metro Pizza is a personal project not a actually restaurant site.</strong></p>  trigger={<Image circular size='medium' src={PizzaCover}  className='iconImage'/>}  header="About" position='top center' hoverable on='click'/>
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='medium' src={PizzaImage} />
    </Reveal.Content>
  </Reveal>
)

export default RevealPizza

// onClick={props.handleFilteredItems} name='pizzaButton'
