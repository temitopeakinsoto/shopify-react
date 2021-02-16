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
            <Row>
                { products.map(product => (
                    <Col key={product.id}  size={{ xs: '12', md: '4', lg: '3' }}
                    >
                        <Link to={`products/${product.id}`}>
                            <Div p="2rem" shadow="1" hoverShadow={{ xm: 'none', md:'2', lg:'3'}}>
                                <Div h="20rem" bgImg={product.images[1].src} bgSize="cover" bgPos="center center">                                    
                                </Div>
                                <Text>{product.title}</Text>
                                <Text>{product.variants[0].price}</Text>
                            </Div>                        
                        </Link>
                        </Col>
                ))
                }
            </Row>            
        </Container>
    )
}
