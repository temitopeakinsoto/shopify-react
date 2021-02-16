import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Container, Text, Div, Row, Col, Button } from "atomize";

export default function ProductPage() {
  const { id } = useParams();
  const {
    fetchProductWithId,
    addItemToCheckout,
    product,
    openCart,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  if (!product.title) return <Container>...Loading</Container>;

  return (
    <Container>
      <Row>
        <Col size={{ xs: "12", md: "6", lg: "6" }}>
          <Div
            bgImg={product.images[1].src}
            bgSize="cover"
            bgPos="center center"
            h={{ xs: "30rem", md: "20rem", lg: "40rem" }}
          ></Div>
          
        </Col>
        <Col p={{ t: { xs: "1rem", md: "4rem" } }}>
          <Text>{product.title}</Text>
          <Text>{product.variants[0].price}</Text>
          <Button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
              openCart();
            }}
          >
            Add to Cart
          </Button>
          <Button m={{ y: { xs: '1rem', md: '1rem' }}}>
            <Link to='/'>Store</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
