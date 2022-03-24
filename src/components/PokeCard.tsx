import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { Card, Col, Row } from "react-bootstrap";

class PokeCard extends React.Component<
  {},
  { PokeName: any; PokeId: any; PokeType: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      PokeName: `${props.name}`,
      PokeType: `${props.name}`,
      PokeId: `${props.id}`,
    };
  }

  render() {
    return (
      <div>
        <Card
          className="mb-3 bg-pokemon"
        >
          <Card.Body>
            <Row>
              <Col style={{ width: "100px" }}>
                <Card.Title className="text-capitalize text-white text-left">
                  {this.state.PokeName}
                </Card.Title>
                <Card.Text className="text-white">
                  {this.state.PokeType}
                </Card.Text>
              </Col>
              <Col>
                <Card.Img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.state.PokeId}.png`}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PokeCard;
