import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext'
import {Container, Text, Div, Row, Col } from 'atomize'


export default function HomePage() {
    const { fetchAllProducts, products } = useContext(ShopContext);
    useEffect(() => {
        fetchAllProducts();
        
    }, [fetchAllProducts])


    if(!products) return <div>...Loading</div>
    return (
        <Container>
            <Text style={{color: 'blue', fontWeight: 'bold'}} tag="h1" textSize="display1" m={{ b: "3rem" }}>Dear Friends</Text>
            <Text>We are in process of launching a product/platform that allows you to acquire an asset (e.g. laptops, PCs, projectors, CCTV, water dispenser, air-conditioner, TV, fridge and coffee machines) with a new payment term, i.e Rent per Month.</Text>
            <Text style={{color: 'red', fontWeight: 'bold', fontStyle:'italic'}} m={{ b: "1rem", t:'1rem' }}>So if you want to know about the featured products and also want to avail yourself of an early bird discount of <span style={{fontSize: '4rem'}}>20%</span>, please signup with us</Text>
            <Text m={{ b: "1rem" }}>Kindly select a product category from the list below and indicate your interest. </Text>
            <Text>Your response(s) is greatly appreciated. Thank you!</Text>
            <Row>
                { products.map(product => (
                    <Col key={product.id}  size={{ xs: '12', md: '4', lg: '3' }}
                    >
                        <Link to={`products/${product.id}`}>
                            <Div p="2rem" shadow="1" hoverShadow={{ xm: 'none', md:'2', lg:'3'}}>
                            <Text m="2rem" style={{color: "red", fontWeight: "bold"}}>{product.title}</Text>
                                <Div h="20rem" bgImg={product.images.src} bgSize="cover" bgPos="center">                                    
                                </Div>
                                {/* <Text m="2rem" style={{color: "red", fontWeight: "bold"}}>{product.title}</Text> */}
                                {/* <Text>{product.variants[0].price}</Text> */}
                            </Div>                        
                        </Link>
                        </Col>
                ))
                }
            </Row>            
        </Container>
    )
}
