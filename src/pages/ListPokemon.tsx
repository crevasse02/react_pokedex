import React from "react";
import { useState, useEffect } from "react";
import { FetchPokemon } from "../services/FetchPokemon";
import PokeCard from "../components/PokeCard";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../components/Card.css";

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    FetchPokemon().then((data) => {
      setPokemons(data);
    });
    
  }, []);
  
  return (
    <div>
      <Row>
        <Col>
          <Card className="px-4 py-4 border-pokemon overflow-pokemon">
            <Card.Title className="pt-4 pb-2">PokeDex</Card.Title>
            {Object.entries(pokemons)[3] &&
              Object.entries(pokemons)[3][1].map(
                (pokemon: any, index: number) => {
                  return <PokeCard key={index} {...pokemon} id={index + 1} />;
                }
              )}
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default ListPokemon;
