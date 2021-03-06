import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HairExtensionCard(props) {
    return (
        <Card className="ms-3 mt-5 p-1 mobile-cards">
            <Row>
                <Col>
                    <Card.Img className="img-fluid" src="https://picsum.photos/1100/2200" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.color}
                        </Card.Text>
                        <Card.Text>
                            {props.length} Inches
                        </Card.Text>
                        <Card.Text>
                            ${props.price}
                        </Card.Text>
                        <Card.Text>
                            Left in Stock: {props.stock}
                        </Card.Text>
                        <Button
                            className="snipcart-add-item"
                            data-item-id={props.id}
                            data-item-name={props.name}
                            data-item-price="13"
                            data-item-weight="20"
                            data-item-description="Some fresh bacon">
                                Add to Cart
                        </Button>


    
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default HairExtensionCard;


