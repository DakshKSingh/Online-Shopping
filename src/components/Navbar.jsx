import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Menu,Input } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <>
    <Menu  className="ui inverted menu fixed">
      <Menu.Menu>
      <Menu.Item icon='chrome' name='My Online Store' className='' href="">
      </Menu.Item>
        <Menu.Item icon='home' name='Home' className='' href="/">
        </Menu.Item>
        <Menu.Item icon='shopping cart' name='Shopping Cart' className='' href="/cart">
        </Menu.Item>
      </Menu.Menu>
    <Menu.Item position="right">
      <Input icon='search' placeholder='Search...' />
    </Menu.Item>
  </Menu>
    </>
  );
};

export default Navbar;
