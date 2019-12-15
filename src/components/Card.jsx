import React from 'react';
import Navbar from './Navbar.jsx';
import { Link, Redirect } from 'react-router-dom';
import { Menu,Input, Card, Icon, Image, Container, Row, Grid,Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Cards = (props) => {
  // console.log(props);
  const newTo = {
    pathname: "/details",
    title: props.title,
    price: props.price,
    url: props.url,
    cartItem: props.cartItem,
    addToCart: props.addToCart,
    removeFromCart: props.removeFromCart
  };
  // const thisItemInCart = props.cart.filter(item=>item.title===props.title)[0];
  return(
    <>

    <Grid.Column>
      <Link to={newTo}>
      <Card style={{backgroundColor:'white'}}>
          <Image src={props.url} style={{height:"200px",width:"auto","maxWwidth":"300px"}}/>
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Price: ${props.price}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
      </Link>
      <Button style={{backgroundColor:'#f2f2f2'}} onClick={()=>props.addToCart(props)}>
        <Icon name='shopping cart' />
        Add to Cart {
          props.cartItem
          ?
          <>: ({(props.cartItem && props.cartItem.quantity) || 0})</>
          : null
        }
      </Button>
      {
        props.cartItem
        ?
        <Button style={{backgroundColor:'#474747',color:'white'}} onClick={()=>props.removeFromCart(props.cartItem)}>
          <Icon name='close' />
          Remove
        </Button> :   null
      }

    </Grid.Column>
    </>
  );
};

// function mapStateToProps(state){
//   return{
//     cart: state.cart
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return{
//     addToCart:(item)=>{
//       dispatch({type:'ADD',payload:item})
//     },
//     removeFromCart:(item)=>{
//       dispatch({type:'REMOVE',payload:item})
//     }
//   }
// }

export default Cards;
