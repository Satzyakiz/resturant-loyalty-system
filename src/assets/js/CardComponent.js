import React from "react";

// import data from "../data/data.json";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import "../css/CardComponent.css";

class CardComponent extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.d)
        let n = this.props.visitNo;
        let foodData = this.props.data;
        console.log(this.props.data)
        return (
            <Container fluid>
                <Card id="card-current">

                    <Card.Header style={{ background: "#0E4D92", color: "white", marginBottom: "5px" }}>
                        {n === 0 ? <h3> This is your 1st visit's redemption</h3>
                            : <h3> This is your {n + 1} visit's redemption, last visited on {this.props.date} </h3>}
                    </Card.Header>
                    <CardGroup>

                        <Card>
                            <Card.Img variant="top" src={foodData[0].imgSrc} />
                            <Card.Body>
                                <Card.Title>{foodData[0].name}</Card.Title>
                                <Button variant="primary" size="md">
                                    Redeem
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Happy Dining!</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={foodData[1].imgSrc} />
                            <Card.Body>
                                <Card.Title>{foodData[1].name}</Card.Title>
                                <Button variant="primary" size="md">
                                    Redeem
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Happy Dining!</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={foodData[2].imgSrc} />
                            <Card.Body>
                                <Card.Title>{foodData[2].name}</Card.Title>
                                <Button variant="primary" size="md">
                                    Redeem
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Happy Dining!</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Card>
            </Container>
        );
    }
}

export default CardComponent;