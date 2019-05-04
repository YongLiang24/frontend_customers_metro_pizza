import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'
import PizzaCover from '../images/PizzaCover.png'
import PizzaImage from '../images/PizzaImage.png'

const RevealPizza = (props) => (
  <Reveal animated='small fade' id="RevealContents" >
    <Reveal.Content visible>
      <Image circular size='large' src={PizzaCover} onClick={props.handleFilteredItems} name='pizzaButton' className='iconImage'/>
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image circular size='large' src={PizzaImage} />
    </Reveal.Content>
  </Reveal>
)

export default RevealPizza
