import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import TopHeader from './TopHeader';
import VideoBackground from './VideoBackground';
import { Button, Card} from 'semantic-ui-react';
import ItemCard from './ItemCard';
import OrderCard from './OrderCard';

class MenuTabs extends Component{
  state ={
    allMenuItems: [], pizzaMenuItems:[], wingMenuItems: [], beverageMenuItems:[],
    isMenuItem: '', cartListItems: [], totalPrice:0, customerName: '',
    customerPhone: '', modalOpen: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/menu_items')
    .then(resp => resp.json())
    .then(json =>{this.setState({allMenuItems: json})})
  }
//helper method to filter items based on selected tabs
  filterItems = (category) =>{
    let items = this.state.allMenuItems.filter(item =>{
      return item.category === category
    })
    return items
  }
//Append items to arrays based on the tab selected
  handleFilteredItems = (ev)=>{
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
      case 'cartButton':
        this.setState({isMenuItem: ev.target.name})
        let totalPrice = 0;
        this.state.cartListItems.map(item=>{
          return totalPrice =(parseFloat(totalPrice) + parseFloat(item.price))})
        this.setState({totalPrice: totalPrice.toFixed(2)})
        break;
      default:
        break;}
    }
//this method adds items to cart when button is clicked.
  handleAddToCart =(ev)=>{
    const selectedItem = this.state.allMenuItems.find(item=>{
      return item.name === ev.target.value
    })
    const cartObject ={name: selectedItem.name, price: selectedItem.price,
      img_url: selectedItem.img_url,id: selectedItem.id}
    let updatedCartItem = this.state.cartListItems.slice()
    updatedCartItem.push(cartObject)
    this.setState({cartListItems: updatedCartItem})
  }

  handleRemoveItem = (ev)=>{
    //remove the item by index
    this.state.cartListItems.splice(ev.target.value, 1)
    this.setState((prevState) => ({cartListItems: prevState.cartListItems}))
    //update the total price
    let totalPrice = 0;
    this.state.cartListItems.map(item=>{
      return totalPrice =(parseFloat(totalPrice) + parseFloat(item.price))})
    this.setState({totalPrice: totalPrice.toFixed(2)})
  }

  handleCartInput =(ev)=>{
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleCartForm =(ev)=>{
    ev.preventDefault()
    console.log('form',ev.target.customerName.value)
    console.log('form',ev.target.customerPhone.value)
  }

  handleModalOpen = () => this.setState({ modalOpen: true })
  handleModalClose = () => this.setState({ modalOpen: false })

  render(){
    if(this.state.isMenuItem === "wingButton"){
      return (
        <div>
          <TopHeader /> <VideoBackground />
          <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
          <Card.Group centered >
            {this.state.wingMenuItems.map(wing =>{
              return  <Card key={wing.id}>
                <ItemCard id={wing.id} name={wing.name} price={wing.price} img_url={wing.img_url} description={wing.description}
                handleAddToCart={this.handleAddToCart} itemName={wing.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
              </Card>})}
          </Card.Group> </div> )}
      else if(this.state.isMenuItem === "beverageButton"){
        return(
          <div>
            <TopHeader />  <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <Card.Group centered >
              {this.state.beverageMenuItems.map(beverage =>{
                return  <Card key={beverage.id}>
                  <ItemCard id={beverage.id} name={beverage.name} price={beverage.price} img_url={beverage.img_url} description={beverage.description} handleAddToCart={this.handleAddToCart} itemName={beverage.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
                </Card>})}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "pizzaButton"){
        return(
          <div>
            <TopHeader /> <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <Card.Group centered >
              {this.state.pizzaMenuItems.map(pizza =>{
                return  <Card key={pizza.id}>
                  <ItemCard id={pizza.id} name={pizza.name} price={pizza.price} img_url={pizza.img_url} description={pizza.description} handleAddToCart={this.handleAddToCart} itemName={pizza.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
                </Card>})}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "cartButton"){
        return(
          <div>
            <TopHeader /> <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <Card.Group centered>  <Card id='cartCard'>
              {this.state.cartListItems.map((item, index)=>{
                return <OrderCard key={index} name={item.name} price={item.price} img_url={item.img_url} handleRemoveItem={this.handleRemoveItem} index={index}/>})}
              <Card.Content id='cartInput'>
                <form onSubmit={this.handleCartForm}>
                  Name: <input type='text' required onChange={this.handleCartInput} name='customerName' value={this.state.customerName}/>
                  Phone#:<input type='number' required onChange={this.handleCartInput} name='customerPhone' value={this.state.customerPhone}/>
                  <br/><br/>Total: ${this.state.totalPrice}<br/><br/>
                  <div className='ui one buttons'>
                    <Button basic color='green' type='submit'>Place Order</Button>
                  </div>  </form>  </Card.Content> </Card>
            </Card.Group>  </div>)}
        else{
          return(
            <div>
              <TopHeader />
              <VideoBackground />
              <MenuButtons handleFilteredItems={this.handleFilteredItems}/>

              
            </div>
          )}
        }
  }

export default MenuTabs;
