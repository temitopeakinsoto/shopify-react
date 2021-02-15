import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { SideDrawer, Text, Div, Row, Col, Anchor } from "atomize";

export default function Cart() {
  const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

  return (
    <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
      <Div d="flex" flexDir="column" m={{ b: "4rem" }}>
        {checkout.lineItems &&
          checkout.lineItems.map((item) => (
            <Row>
              <Col>
                <Div
                  bgImg={item.variant.image.scr}
                  bgSize="cover"
                  bgPos="center center"
                  h="5rem"
                  w="4rem"
                ></Div>
              </Col>
              <Col>
                <Text>{item.variant.title}</Text>
                <Text>{item.quantity}</Text>
              </Col>
              <Col>
                <Text>{item.price}</Text>
              </Col>
            </Row>
          ))}
        <Div d="flex" flexDir="row" justify="space-between">
          <Anchor href={checkout.webUrl} target="_blank">
            Checkout
          </Anchor>
          <Anchor onClick={closeCart}>Close</Anchor>
        </Div>
      </Div>
    </SideDrawer>
  );
}
