import React, {Component} from 'react';
import MenuButtons from './MenuButtons';
import TopHeader from './TopHeader';
import { Button, Card, TextArea, Form, Input, Modal, Menu} from 'semantic-ui-react';
import ItemCard from './ItemCard';
import OrderCard from './OrderCard';
import RevealPizza from './RevealPizza';

class MenuTabs extends Component{
  state ={
    allMenuItems: [], pizzaMenuItems:[], wingMenuItems: [], beverageMenuItems:[],
    isMenuItem: '', cartListItems: [], totalPrice:0, customerName: '',
    customerPhone: '', specialInstruction: '', isModal: false, itemPerRow: 4, barSize: "huge"
  }

  componentDidMount(){
    setInterval(this.handleItemPerRow, 3000)
    this.handleBarSize()
    fetch('https://backend-metro-pizza.herokuapp.com/api/v1/menu_items')
    .then(resp => resp.json())
    .then(json =>{this.setState({allMenuItems: json})})
    .catch(err =>{
      console.log("json error:", err)
    })
  }

  handleBarSize = ()=>{
    if(window.innerWidth < 400){
      this.setState({barSize: "big"})
    }else{
      this.setState({barSize: "huge"})
    }
  }

  filterItems = (category) =>{
    let items = this.state.allMenuItems.filter(item =>{
      return item.category === category
    })
    return items
  }

  handleFilteredItems = (ev)=>{
    // console.log(ev.target.name)
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
        this.setState({totalPrice: totalPrice.toFixed(2), messageHidden: 'hidden'})
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
      let updatedCartItem = this.state.cartListItems.slice();
      updatedCartItem.push(cartObject);
      this.setState({cartListItems: updatedCartItem})

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
      .catch(err =>{
        console.log("json error:", err)
      })
      this.setState({cartListItems: [], customerName: '', customerPhone: '', specialInstruction: '', totalPrice: 0, messageHidden: 'visible', isModal: true})
      }
      else{alert("Sorry the cart is empty.")}
  }

  handleModalClose = ()=>{
    this.setState({isModal: false, isMenuItem: 'homePage'})
  }

  handleItemPerRow =()=>{
    // console.log("x")
    const windowWidth = window.innerWidth
    if(windowWidth < 1000){
      this.setState({itemPerRow: 1})
    }
    else{
      this.setState({itemPerRow: 4})
    }
  }

  render(){
    if(this.state.isMenuItem === "wingButton"){
      return (
        <div>
          <Menu fixed="top" size="mini">
            <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/> <MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
          <Card.Group centered itemsPerRow={this.state.itemPerRow}>
            {this.state.wingMenuItems.map(wing =>{
              return  <ItemCard key={wing.id} name={wing.name} price={wing.price} img_url={wing.img_url} description={wing.description}
                handleAddToCart={this.handleAddToCart} itemName={wing.id}/>
            })}
            </Card.Group> </div> )}
            else if(this.state.isMenuItem === "beverageButton"){
              return(
                <div>
                  <Menu fixed="top" size="mini">
                    <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/><MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
                  <Card.Group centered itemsPerRow={this.state.itemPerRow}>
                    {this.state.beverageMenuItems.map(beverage =>{
                      return   <ItemCard key={beverage.id} name={beverage.name} price={beverage.price} img_url={beverage.img_url} description={beverage.description} handleAddToCart={this.handleAddToCart} itemName={beverage.id} />
                    })}
                  </Card.Group>  </div>  )}
            else if(this.state.isMenuItem === "pizzaButton"){
              return(
                <div>
                  <Menu fixed="top" size="mini">
                    <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/><MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
                  <Card.Group centered itemsPerRow={this.state.itemPerRow}>
                    {this.state.pizzaMenuItems.map(pizza =>{
                      return <ItemCard key={pizza.id} name={pizza.name} price={pizza.price} img_url={pizza.img_url} description={pizza.description} handleAddToCart={this.handleAddToCart} itemName={pizza.id}/>
                        })}
            </Card.Group>  </div>  )}
      else if(this.state.isMenuItem === "cartButton"){
        return(
          <div id='cartDiv'>
            <Menu fixed="top" size="mini">
              <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/><MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
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
                <Modal
                  trigger={<Form.Field control={Button} content='Place Order' primary/>}
                  style={{textAlign: "center"}} size='small' open={this.state.isModal}>
                  <Modal.Header>Order Completed</Modal.Header>
                  <Modal.Content>We have received your order. It will be ready for pickup in 15 to 30 minutes. Thank You.</Modal.Content>
                  <Button size='large' style={{width: "30%"}} positive onClick={this.handleModalClose} compact >Okay</Button> <hr/>
              </Modal>
                <br/><hr/>
              </Form>
            </Card.Group>
            </div>)}
        else if(this.state.isMenuItem === "homePage"){
          return(
            <div className="mainPageDiv">
              <Menu fixed="top" size="mini">
                <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/><MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
              <p id='mainParagraph'>Click on the tray below to start!</p>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )
        }
        else{
          return(
            <div className="mainPageDiv">
              <Menu fixed="top" size="mini">
                <TopHeader handleFilteredItems={this.handleFilteredItems} barSize={this.state.barSize}/><MenuButtons handleFilteredItems={this.handleFilteredItems} itemCount={this.state.cartListItems.length}/></Menu><br/><br/><br/><br/><br/>
              <p id='mainParagraph'>Click on the tray below to start!</p>
              <RevealPizza handleFilteredItems={this.handleFilteredItems}/>
            </div>
          )}
        }
  }

export default MenuTabs;
