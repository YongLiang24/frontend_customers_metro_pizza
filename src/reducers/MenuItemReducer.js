const initialState = {
  allMenuItems: []
}

const MenuItemReducer = (state = initialState, action) =>{

  switch(action.type){

    case 'showWings':
      //console.log('hitting reducer', state)
      return {
        allMenuItems: state.allMenuItems + 1
      }

    default:
    return state;
  }
}

export default MenuItemReducer;
