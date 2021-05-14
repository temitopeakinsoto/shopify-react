import React, { useContext, useEffect, useState } from "react";
import emailjs from "emailjs-com"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Container, Text, Div, Row, Col, Button, Input } from "atomize";

export default function ProductPage() {
  const [interested, setInterested] = useState(false)
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
 

  function sendEmail(e) {
    e.preventDefault();
    console.log('Sending form...')
    

    emailjs.sendForm('service_3daumnm', 'template_t56yy6a', e.target, 'user_fkdZqPHZfg6TstgalASyQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  if (!product.title) return <Container>...Loadings</Container>;

  return (
    <Container>
      <Row>
        <Col size={{ xs: "12", md: "6", lg: "6" }}>
          <Div
            bgImg={product.images.src}
            bgSize="cover"
            bgPos="center center"
            h={{ xs: "30rem", md: "20rem", lg: "40rem" }}
          ></Div>
        </Col>
        <Col p={{ t: { xs: "1rem", md: "4rem" } }}>
          <Text tag='header' textSize="display1">{product.title}</Text>
          <Div style={{display:"flex"}}>
            {product.variants.map((variant) => (
              <Div p="2rem" style={{width: '30%'}}>
                <Text>Title: {variant.title}</Text>
                <Text>Inches: {variant.size}</Text>
                <Text>Rent: {variant.rent}</Text>
              </Div>
            ))}
          </Div>
          <Button m={{ y: { xs: "3rem", md: "5rem" }, x: { xs: "auto", md: "auto" } }}
          onClick={() => setInterested(true)}
          >
            Interested
          </Button>          
          {interested && <form onSubmit={sendEmail}><Input type="email" name="email" required placeholder="Enter your email" /><Button>submit</Button></form>}
        </Col>
      </Row>
    </Container>
  );
}
