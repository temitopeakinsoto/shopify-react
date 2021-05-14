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
            <h2>Hello there!!</h2>
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
