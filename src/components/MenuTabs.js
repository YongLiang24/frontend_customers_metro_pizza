import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import TopHeader from './TopHeader';
import VideoBackground from './VideoBackground';
import { Button, Card, TextArea} from 'semantic-ui-react';
import ItemCard from './ItemCard';
import OrderCard from './OrderCard';
import RevealPizza from './RevealPizza'

class MenuTabs extends Component{
  state ={
    allMenuItems: [], pizzaMenuItems:[], wingMenuItems: [], beverageMenuItems:[],
    isMenuItem: '', cartListItems: [], totalPrice:0, customerName: '',
    customerPhone: '', modalOpen: false, specialInstruction: ''
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
      case 'homePage':
        this.setState({isMenuItem: ev.target.name})
        break;
      default:
        break;
      }
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
    this.setState({cartListItems: updatedCartItem, modalOpen:false})
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

    const currentTime = new Date().toLocaleTimeString()
    const orderObjects= {
      Order_Time: currentTime,
      Customer_Name: ev.target.customerName.value,
      Customer_Phone: ev.target.customerPhone.value,
      Special_Instruction: ev.target.specialInstruction.value,
      Total_Price: '$' + this.state.totalPrice,

    }
    const order_lists = this.state.cartListItems
    order_lists.push(orderObjects)
    // console.log("order_lists", order_lists)
    // console.log("order_lists JsonStringified", JSON.stringify({order_lists} ))
    fetch('http://localhost:3000/api/v1/orders',{
      method: 'POST',
      headers:{'Content-Type': 'application/json',
        Accept: 'application/json'},
        body: JSON.stringify({order_lists} )
    })
    .then(resp => resp.json())
    .then(json=>{
      console.log(json)
    })
  }

  handleModalOpen = () => this.setState({ modalOpen: true })
  handleModalClose = () => this.setState({ modalOpen: false })

  render(){
    if(this.state.isMenuItem === "wingButton"){
      return (
        <div>
          <TopHeader handleFilteredItems={this.handleFilteredItems}/> <VideoBackground />
          <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
          <Card.Group centered >
            {this.state.wingMenuItems.map(wing =>{
              return  <Card key={wing.id} className="outterCard">
                <ItemCard id={wing.id} name={wing.name} price={wing.price} img_url={wing.img_url} description={wing.description}
                handleAddToCart={this.handleAddToCart} itemName={wing.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
              </Card>})}
          </Card.Group> </div> )}
      else if(this.state.isMenuItem === "beverageButton"){
        return(
          <div>
            <TopHeader handleFilteredItems={this.handleFilteredItems}/>  <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <Card.Group centered >
              {this.state.beverageMenuItems.map(beverage =>{
                return  <Card key={beverage.id} className="outterCard">
                  <ItemCard id={beverage.id} name={beverage.name} price={beverage.price} img_url={beverage.img_url} description={beverage.description} handleAddToCart={this.handleAddToCart} itemName={beverage.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
                </Card>})}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "pizzaButton"){
        return(
          <div>
            <TopHeader handleFilteredItems={this.handleFilteredItems}/> <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <Card.Group centered >
              {this.state.pizzaMenuItems.map(pizza =>{
                return  <Card key={pizza.id} className="outterCard">
                  <ItemCard id={pizza.id} name={pizza.name} price={pizza.price} img_url={pizza.img_url} description={pizza.description} handleAddToCart={this.handleAddToCart} itemName={pizza.name} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
                </Card>})}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "cartButton"){
        return(
          <div>
            <TopHeader handleFilteredItems={this.handleFilteredItems}/> <VideoBackground />
            <MenuButtons handleFilteredItems={this.handleFilteredItems}/>  <br/><br/>
            <form onSubmit={this.handleCartForm}>
              <Card.Group centered>  <Card id='cartCard'>
                {this.state.cartListItems.map((item, index)=>{
                  return <OrderCard key={index} itemName={item.name} price={item.price} img_url={item.img_url} handleRemoveItem={this.handleRemoveItem} index={index}/>})}
                <Card.Content id='cartInput'>
                  <strong>Special Instructions:</strong><br/>
                  <TextArea name="specialInstruction"
                    value={this.state.specialInstruction} onChange={this.handleCartInput}/> <br/>
                  Name: <input type='text' required onChange={this.handleCartInput} name='customerName' value={this.state.customerName}/>
                  Phone#:<input type='number' required onChange={this.handleCartInput} name='customerPhone' value={this.state.customerPhone}/>
                  <br/><br/>Total: ${this.state.totalPrice}<br/><br/>
                  <div className='ui one buttons'>
                    <Button basic color='green' type='submit'>Place Order</Button>
                  </div>    </Card.Content> </Card>
              </Card.Group> </form> </div>)}
        else if(this.state.isMenuItem === "homePage"){
          return(
            <div className="mainPageDiv">
              <TopHeader handleFilteredItems={this.handleFilteredItems}/>
              <VideoBackground />
              <MenuButtons handleFilteredItems={this.handleFilteredItems}/>
              <br/><br/><br/><br/><br/><br/>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )
        }
        else{
          return(
            <div className="mainPageDiv">
              <TopHeader />
              <VideoBackground />
              <MenuButtons handleFilteredItems={this.handleFilteredItems}/>
              <br/><br/><br/><br/><br/><br/>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )}
        }
  }

export default MenuTabs;
