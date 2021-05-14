import React, { useContext, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  Container,
  Text,
  Div,
  Row,
  Col,
  Button,
  Input,
  Img,
  Modal,
} from "atomize";

export default function ProductPage() {
  const [interested, setInterested] = useState(false);
  const [interest, setInterest] = useState("");
  const [msg, setMsg] = useState(false);
  const { id } = useParams();
  const { fetchProductWithId, product } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  function sendEmail(e) {
    e.preventDefault();
    console.log("Sending form...");

    emailjs
      .sendForm(
        "service_3daumnm",
        "template_t56yy6a",
        e.target,
        "user_fkdZqPHZfg6TstgalASyQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setInterested(false);
    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 1000);
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
            h={{ xs: "20rem", md: "30rem", lg: "30rem" }}
          ></Div>
        </Col>
        <Col p={{ t: { xs: "1rem", md: "4rem" } }}>
          <Text tag="header" textSize="display1">
            {`${product.title} Options`}
          </Text>
          <Div
            style={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {product.variants.map((variant) => (
              <Div
                p="1rem"
                m="1rem"
                style={{ boxShadow: "1px 1px 2px 1px gray" }}
              >
                <Text>
                  Product:{" "}
                  <span style={{ color: "blue" }}>{variant.title}</span>
                </Text>
                <div>
                  <div>
                    <Text>
                      Cost Price:{" "}
                      <span style={{ color: "red" }}>{variant.price} KSh</span>
                    </Text>
                    <Text>
                      Rent per month:{" "}
                      <span style={{ color: "red" }}>
                        {Math.round((1.2 * variant.price) / 15)} KSh
                      </span>
                    </Text>
                    <Text>Waranty: {variant.waranty}</Text>
                    <Text>Insurance: {variant.insurance}</Text>
                  </div>
                  <img alt="product pic" src={variant.img || ""} />
                </div>
              </Div>
            ))}
          </Div>
          <Text m={{ t: "2rem" }}>
            Would you be interested in renting one or more of these{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {product.title}{" "}
            </span>
            from us?
            <span>
              <Div d="flex" m={{ b: "3rem" }}>
                <Button
                  onClick={() => {
                    setInterested(true);
                    setInterest("Rent");
                  }}
                  m={{
                    y: { xs: "1rem", md: "0rem" },
                    x: { xs: "auto", md: "auto" },
                  }}
                >
                  Rent
                </Button>
                <Button
                  m={{
                    y: { xs: "1rem", md: "0rem" },
                    x: { xs: "auto", md: "auto" },
                  }}
                  onClick={() => {
                    setInterested(true);
                    setInterest("Rent to Own");
                  }}
                >
                  Rent + Own
                </Button>
                <Button
                  m={{
                    y: { xs: "1rem", md: "0rem" },
                    x: { xs: "auto", md: "auto" },
                  }}
                >
                  <Link to="/">Not Interested</Link>
                </Button>
              </Div>
            </span>
            
              {msg && (
                <Modal
                  m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
                  isOpen={msg}
                >
                  Thanks for your response
                </Modal>
              )}
          </Text>
          {interested && (
            <form style={{ marginBottom: "5rem" }} onSubmit={sendEmail}>
              <Input
                m={{ t: "1rem", b: "1rem" }}
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <Input
                m={{ t: "1rem", b: "1rem" }}
                type="text"
                name="name"
                required
                placeholder="Tell us your name"
              />
              <Text>Interested in any other product(s)?</Text>
              <Input
                m={{ t: "1rem", b: "1rem" }}
                type="text"
                name="otherproduct"
                placeholder="Enter product name (Optional)"
              />
              <Input type="hidden" name="product" value={product.title} />
              <Input type="hidden" name="interest" value={interest} />

              <Div
                d="flex"
                m="1rem"
                p="1rem"
                w="80%"
                flexDir="row"
                justify="space-between"
              >
                <Button m="1rem">submit</Button>
                <Button m="1rem" onClick={() => setInterested(false)}>
                  cancel
                </Button>
              </Div>
            </form>
          )}
        </Col>
      </Row>
    </Container>
  );
}
