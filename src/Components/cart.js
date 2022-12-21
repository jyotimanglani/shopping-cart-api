import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap"

const Cart = ({CartItem, removeItem, buyNow}) => {
    let amount = 0;

    CartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return (
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {CartItem.map(item => {
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img
                            height={80}
                            src={item.tinyImage}/></Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                    <span>price :- {item.productPrice}</span>   
                    <Button color="danger" onClick={()=> removeItem(item)}>Remove</Button>         
                            
                            </Col>
                        </Row>
                    </ListGroupItem>
                    
                    
                })}
            </ListGroup>

            
            {
                CartItem.length >= 1 ?(
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand total 
                        </CardHeader>
                        <CardBody>
                            your amount for {CartItem.length} product is {amount}
                        </CardBody>
                        <CardFooter>
                            <button color="success" onClick={buyNow}>pay here</button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is empty</h1>
                )
            }
        </Container>
    )
}


export default Cart;