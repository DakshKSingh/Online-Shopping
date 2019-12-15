import React from 'react';
import Navbar from './Navbar.jsx';
import { Menu,Input, Card, Icon, Image, Container, Row, Grid } from 'semantic-ui-react';

const ShoppingCart = (props) => {
  const loadState = () => {
      try {
          const serialisedState = window.localStorage.getItem('app_state');
          if (!serialisedState) return undefined;
          return JSON.parse(serialisedState);
      } catch (err) {
          return undefined;
      }
  };
  const persistedState = loadState();
  console.log(persistedState);
  const card=persistedState.cart.map((item,key)=>
    <>
    <Grid.Column>

        <Card className="home-card" style={{height:"200px",width:"100%",marginBottom:"5%"}}>
          <Card.Content>
          <Image src={item.url} style={{height:"100px","float":'left'}}/>
            <Card.Header>

            <span className="detail-card-header">
            {item.title}</span></Card.Header>
            <Card.Meta style={{textAlign:'center'}}>
            <br/><br/>
              <span className='detail-card-price'>Price: ${item.price}</span><br/>
              Quantity: {item.quantity}<br/>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <a href="/order">
              <Icon name='shopping cart' />
              Checkout - Total Price: ${parseInt(item.price)*item.quantity}
            </a>
            </Card.Content>
        </Card>
        </Grid.Column>
        </>
  )
  console.log(card);
  return(
    <>
      <Navbar />
      {
        card.length==0?
        <h1 style={{paddingTop:"20%"}}>Your Cart is Empty!</h1>
        :
        <Container style={{'marginTop':'5%'}}>
          <Grid style={{'margin':-80 , 'marginTop':40}} columns={2}>
            <Grid.Row>
              {
                card
              }
            </Grid.Row>
          </Grid>
        </Container>
      }

    </>
  );
};

export default ShoppingCart;
