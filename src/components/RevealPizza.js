import React from 'react'
import { Image, Reveal, Popup } from 'semantic-ui-react'
import PizzaCover from '../images/PizzaCover.png'
import PizzaImage from '../images/PizzaImage.png'

const RevealPizza = (props) => (
  <Reveal animated='small fade' id="RevealContents" >
    <Reveal.Content visible>
      <Popup content=<p>Metro Pizza is an application which allows customers to place pizza orders online and send orders to the Administrator site.<a href="https://frontend-admin-metro-pizza.herokuapp.com/" target="_blank">Link to Administrator</a></p>  trigger={<Image circular size='large' src={PizzaCover}  className='iconImage'/>}  header="About" position='top center' hoverable/>
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='large' src={PizzaImage} />
    </Reveal.Content>
  </Reveal>
)

export default RevealPizza

// onClick={props.handleFilteredItems} name='pizzaButton'
