import React from "react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";



const Navbar = () => (
  <Menu style={{backgroundColor: "black"}}>
    <Link to="/">
      <Menu.Item style={{color:"white"}}>
        Home
      </Menu.Item>
    </Link>
    <Link to="/game">
      <Menu.Item style={{color:"white"}}>
        Game
      </Menu.Item>
    </Link>
  </Menu>
);



export default Navbar;