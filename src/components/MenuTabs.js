import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import ItemModal from './ItemModal';
import TopHeader from './TopHeader';
import VideoBackground from './VideoBackground';
import { Button, Card, Image } from 'semantic-ui-react';
import ItemCard from './ItemCard';

class MenuTabs extends Component{

  state ={
    allMenuItems: [], pizzaMenuItems:[], wingMenuItems: [], beverageMenuItems:[],
    isMenuItem: 'init'
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/menu_items')
    .then(resp => resp.json())
    .then(json =>{
      console.log('all items',json)
      this.setState({
        allMenuItems: json
      })
    })
  }

  filterItems = (category) =>{
    let items = this.state.allMenuItems.filter(item =>{
      return item.category === category
    })
    return items
  }

  handleFilteredItems = (ev)=>{
    console.log('button values =', ev.target.name)
    switch(ev.target.name){
      case 'wingButton':
        let wingItems = this.filterItems('Wings')
        this.setState({wingMenuItems: wingItems, isMenuItem: ev.target.name})
        break;
      case 'pizzaButton':
        let pizzaItems = this.filterItems('pizza')
        this.setState({pizzaMenuItems: pizzaItems, isMenuItem: ev.target.name})
        break;
      case 'beverageButton':
        let beverageItems = this.filterItems('Beverage')
        this.setState({beverageMenuItems: beverageItems, isMenuItem: ev.target.name})
        break;
      default:
        break;
    }
  }

  render(){
    if(this.state.isMenuItem === "wingButton"){
      return (
        <div>
          <TopHeader /> <VideoBackground />
          <MenuButtons handleFilteredItems={this.handleFilteredItems}/>
          <br/><br/>
          <Card.Group centered>
            {this.state.wingMenuItems.map(wing =>{
              return  <Card key={wing.id}> <ItemCard id={wing.id} name={wing.name} price={wing.price} img_url={wing.img_url} description={wing.description}/>
                <ItemModal name={wing.name} description={wing.description} img_url={wing.img_url}/>
              </Card>
            })}
          </Card.Group>
        </div>
          )}
      else if(this.state.isMenuItem === "beverageButton"){
        return(
          <div>
            <TopHeader />  <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>
            <Card.Group centered>
              {this.state.beverageMenuItems.map(beverage =>{
                return  <Card key={beverage.id}> <ItemCard id={beverage.id} name={beverage.name} price={beverage.price} img_url={beverage.img_url} description={beverage.description}/>
                  <ItemModal name={beverage.name} description={beverage.description} img_url={beverage.img_url}/>
                </Card>
              })}
            </Card.Group>
          </div>
              )}
      else if(this.state.isMenuItem === "pizzaButton"){
        return(
          <div>
            <TopHeader /> <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>
            <Card.Group centered>
              {this.state.pizzaMenuItems.map(pizza =>{
                return  <Card key={pizza.id}> <ItemCard id={pizza.id} name={pizza.name} price={pizza.price} img_url={pizza.img_url} description={pizza.description}/>
                  <ItemModal name={pizza.name} description={pizza.description} img_url={pizza.img_url}/>
                </Card>
              })}
            </Card.Group>
          </div>
              )}
        else{
          return(
            <div>
              <TopHeader /> <MenuButtons handleFilteredItems={this.handleFilteredItems}/> <VideoBackground />
            </div>
          )}
        }
  }

export default MenuTabs;
