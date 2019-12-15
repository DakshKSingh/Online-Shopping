import React from 'react';
import Navbar from './Navbar.jsx';
import {connect} from 'react-redux';

const Cart = (cartItems) => {

  // console.log(cartItems);
  return cartItems.reduce((acc,item)=>{
      const filteredItem = acc.filter(item2 => item2.title === item.title)[0]
      filteredItem !== undefined ? filteredItem.quantity++ : acc.push({...item,quantity:1,})
      return acc
  },[]);
};

export default Cart;
