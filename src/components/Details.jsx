import React,{ useState, useEffect, useContext } from 'react';
import Navbar from './Navbar.jsx';
import Cards from './Card.jsx';
import { Menu,Input, Card, Icon, Image, Container, Row, Grid, Button } from 'semantic-ui-react';

const Details = (props) => {
  console.log(props);
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
  var qty=0;

  persistedState.cart.forEach(item=>{
    if(item.title===props.location.title)
    {
      qty=item.quantity;
    }
  });
  console.log(qty);
  const [qty1, setState] = useState(qty);
  return(
    <>
      <Navbar />
      {
        props.location.title===undefined?
          <h1 style={{paddingTop:"20%"}}>No Data! Please go to HomePage</h1>
          :
          <>
          <Container style={{'marginTop':'5%'}}>
            <Grid style={{'margin':-80 , 'marginTop':40}} columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Image src={props.location.url} style={{height:"450px",margin:"14px"}}/>
                </Grid.Column>
                    <Card className="home-card" style={{height:"450px",width:"50%"}}>
                      <Card.Content>
                        <Card.Header style={{'marginTop':'10%'}}><span className="detail-card-header">{props.location.title}</span></Card.Header>
                        <Card.Meta>
                          <span className='detail-card-price'>Price: ${props.location.price}</span>
                        </Card.Meta>
                        <Card.Description style={{'textAlign':'left','marginTop':'10%','fontSize':'120%'}}>
                          <ul>
                          <li>Stunning 13.3-inch Retina display with True Tone; Touch ID</li>
                          <li>Dual-core 8th-generation Intel Core i5 processor; Intel UHD Graphics 617</li>
                          <li>Fast SSD storage; 8GB memory</li>
                          <li>Stereo speakers with wider stereo sound</li>
                          <li>Two Thunderbolt 3 (USB-C) ports</li>
                          <li>Up to 12 hours of battery life</li>
                          <li>Latest Apple-designed keyboard</li>
                          </ul>
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                      <Button style={{backgroundColor:'#f2f2f2'}} onClick={()=>{props.location.addToCart(props.location); setState(qty1+1);}}>
                        <Icon name='shopping cart' />
                        Add to Cart
                        {
                          qty1>0
                          ?
                          <>: ({qty1})</>
                          : null
                        }
                      </Button>
                        </Card.Content>
                    </Card>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          </>
      }

    </>
  );
};

export default Details;
