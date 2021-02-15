import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Anchor, Div } from "atomize";
import { ShopContext } from "../context/ShopContext";
import cartIcon from "../assets/images/cartIcon.png";

export default function Navbar() {
  const { openCart } = useContext(ShopContext);
  return (
    <Container d="flex" flexDir="row" p="2rem" justify="space-between">
      <Anchor><Link  to="/">Shop</Link></Anchor>
      <Div w="20%" d="flex" flexDir="row" justify="space-between">
        <Anchor onClick={() => openCart()}>
          
          <span>
            <img width="20px" height="30px" src={cartIcon} alt="..." />
          </span>
        </Anchor>
        <Anchor><Link  m="2rem" to="/login">Login</Link></Anchor>
      </Div>
    </Container>
  );
}
