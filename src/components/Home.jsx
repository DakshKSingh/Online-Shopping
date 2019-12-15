import React from 'react';
import { connect,Provider } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Menu,Input, Card, Icon, Image, Container, Row, Grid } from 'semantic-ui-react';
import Navbar from './Navbar.jsx';
import Cards from './Card.jsx';
import Cart from './Cart.jsx';

function Home(props){
  console.log(Cart(props.cart));
  return(
    <>
      <Navbar />
      <Container style={{'marginTop':"5%"}}>
        <Grid style={{'margin':-80 , 'marginTop':40}} columns={4} divided>
          <Grid.Row>

            {/*   Data used is static here, Can loop for large available data  */}
            <Cards title="MacBook Air" price="1099" url="./mc_air.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="MacBook Air")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="MacBook Pro" price="2799" url="./mc_pro.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="MacBook Pro")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="iPhone 11" price="999" url="./iphoneXR.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="iPhone 11")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="AirPods" price="249" url="./air_pod.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="AirPods")[0]} removeFromCart={props.removeFromCart}/>
          </Grid.Row>
          <Grid.Row>
            <Cards title="OnePlus 7T" price="599" url="./oneplus7t.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="OnePlus 7T")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="Surface Pro 4" price="1304" url="./sp.jfif" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="Surface Pro 4")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="iPad Pro" price="1699" url="./ipad.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="iPad Pro")[0]} removeFromCart={props.removeFromCart}/>
            <Cards title="Note 10 plus" price="859" url="./sp2.jpg" addToCart={props.addToCart} cartItem={props.cart.filter(cartItem=>cartItem.title==="Note 10 plus")[0]} removeFromCart={props.removeFromCart}/>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch){
  return{
    addToCart:(item)=>{
      dispatch({type:'ADD',payload:item})
    },
    removeFromCart:(item)=>{
      dispatch({type:'REMOVE',payload:item})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
