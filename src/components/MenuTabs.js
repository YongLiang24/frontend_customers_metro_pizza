import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import TopHeader from './TopHeader';
import { Button, Card, TextArea, Form, Input} from 'semantic-ui-react';
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
    fetch('https://backend-metro-pizza.herokuapp.com/api/v1/menu_items')
    .then(resp => resp.json())
    .then(json =>{this.setState({allMenuItems: json})})

  }
  filterItems = (category) =>{
    let items = this.state.allMenuItems.filter(item =>{
      return item.category === category
    })
    return items
  }
  handleFilteredItems = (ev)=>{
    switch(ev.target.name){
      case 'wingButton':
        let wingItems = this.filterItems('Wings')
        this.setState({wingMenuItems: wingItems, isMenuItem: ev.target.name})
        console.log("check wings:", wingItems)
        console.log("target.name:", ev.target.name)
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
  handleAddToCart =(ev)=>{
    const selectedItem = this.state.allMenuItems.find(item=>{
      return item.id.toString() === ev.target.value
    })
    const cartObject ={name: selectedItem.name, price: selectedItem.price,
      img_url: selectedItem.img_url,id: selectedItem.id}
    let updatedCartItem = this.state.cartListItems.slice()
    updatedCartItem.push(cartObject)
    this.setState({cartListItems: updatedCartItem, modalOpen:false})
  }

  handleRemoveItem = (ev)=>{
    this.state.cartListItems.splice(ev.target.value, 1)
    this.setState((prevState) => ({cartListItems: prevState.cartListItems}))
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
    if(this.state.cartListItems.length > 0){
      const currentTime = new Date().toLocaleTimeString()
      const Order_Time = currentTime;
      const Customer_Name = ev.target.customerName.value;
      const Customer_Phone =ev.target.customerPhone.value;
      const Special_Instruction = ev.target.specialInstruction.value;
      const Total_Price = this.state.totalPrice;
      const order_lists = this.state.cartListItems;
    fetch('https://backend-metro-pizza.herokuapp.com/api/v1/orders',{
      method: 'POST',
      headers:{'Content-Type': 'application/json',
        Accept: 'application/json'},
        body: JSON.stringify({Customer_Name, Customer_Phone, Special_Instruction, Total_Price, Order_Time, order_lists} )
    })
    this.setState({cartListItems: [], customerName: '', customerPhone: '', specialInstruction: ''})
      alert("Thank you for your order")
    }
    else{
      alert("please place some items in the cart.")
    }
  }

  // handleModalOpen = () => this.setState({ modalOpen: true })
  // handleModalClose = () => this.setState({ modalOpen: false })

  render(){
    if(this.state.isMenuItem === "wingButton"){
      return (
        <div>
          <TopHeader handleFilteredItems={this.handleFilteredItems}/>
          <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>  <br/><br/>
          <Card.Group >
            {this.state.wingMenuItems.map(wing =>{
              return  <ItemCard key={wing.id} name={wing.name} price={wing.price} img_url={wing.img_url} description={wing.description}
                handleAddToCart={this.handleAddToCart} itemName={wing.id}/>
            })}
            </Card.Group> </div> )}
            else if(this.state.isMenuItem === "beverageButton"){
              return(
                <div>
                  <TopHeader handleFilteredItems={this.handleFilteredItems}/>
                  <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>  <br/><br/>
                  <Card.Group >
                    {this.state.beverageMenuItems.map(beverage =>{
                      return   <ItemCard key={beverage.id} name={beverage.name} price={beverage.price} img_url={beverage.img_url} description={beverage.description} handleAddToCart={this.handleAddToCart} itemName={beverage.id} />
                    })}
                  </Card.Group>  </div>  )}
            else if(this.state.isMenuItem === "pizzaButton"){
              return(
                <div>
                  <TopHeader handleFilteredItems={this.handleFilteredItems}/>
                  <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>  <br/><br/>
                  <Card.Group >
                    {this.state.pizzaMenuItems.map(pizza =>{
                      return <ItemCard key={pizza.id} name={pizza.name} price={pizza.price} img_url={pizza.img_url} description={pizza.description} handleAddToCart={this.handleAddToCart} itemName={pizza.id} modalOpen={this.state.modalOpen} handleModalOpen={this.handleModalOpen} handleModalClose={this.handleModalClose}/>
                        })}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "cartButton"){
        return(
          <div>
            <TopHeader handleFilteredItems={this.handleFilteredItems}/>
            <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>  <br/><br/>
            <Card.Group centered itemsPerRow={2}>
              {this.state.cartListItems.map((item, index)=>{
                return <OrderCard key={index} itemName={item.name} price={item.price} img_url={item.img_url} handleRemoveItem={this.handleRemoveItem} index={index}/>})}
            </Card.Group>
            <Card.Group centered itemsPerRow={1} className='form_order'>
              <Form onSubmit={this.handleCartForm}>
                <Form.Group widths='equal'>
                  <Form.Field control={Input} label=<strong>Name</strong>  placeholder='Name' required onChange={this.handleCartInput} value={this.state.customerName} name='customerName'/>
                  <Form.Field control={Input} label=<strong>Phone #</strong> placeholder='Phone Number'
                    type='number' required onChange={this.handleCartInput} name='customerPhone' value={this.state.customerPhone}/>
                </Form.Group>
                <Form.Field control={TextArea} label=<strong>Special Instruction</strong> name="specialInstruction" value={this.state.specialInstruction} onChange={this.handleCartInput}/>
                <strong>Total: ${this.state.totalPrice}</strong><br/><br/>
                <Form.Field control={Button} content='Place Order' primary/>
                <br/><hr/>
              </Form>
            </Card.Group>
            </div>)}
        else if(this.state.isMenuItem === "homePage"){
          return(
            <div className="mainPageDiv">
              <TopHeader handleFilteredItems={this.handleFilteredItems}/>
              <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>
              <br/><br/><br/><br/><br/><br/>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )
        }
        else{
          return(
            <div className="mainPageDiv">
              <TopHeader />
              <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/>
              <br/><br/><br/><br/><br/><br/>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )}
        }
  }

export default MenuTabs;
