import React from 'react';
import { Card, CardTitle, CardBody, CardText, Button, CardFooter } from 'reactstrap';
function CardComponent({ product }) {
    return (
        <Card
            className={`mt-3 text-light border border-${product?.color} rounded overflow-auto`}
            style={{ height: "350px", backgroundColor: product?.color, boxShadow: "5px 10px 5px #DCDBDF" }}>
            <img
                alt={product?.title}
                src={product?.thumbnail}
                height="200px"
            />
            <CardBody className='overflow-auto'>
                <CardTitle>{product?.title || ''}</CardTitle>
                <CardText>
                    <b>&#8377;{product?.price || ''}</b><br />
                    {product?.description || ''}
                </CardText>
            </CardBody>
            <CardFooter className='border-0'>
                <Button color="primary">
                    Buy Now
                </Button>
                <Button color="warning" className='mx-4' >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardComponent;