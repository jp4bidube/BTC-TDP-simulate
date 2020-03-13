import React from 'react';
import { Container, Divbutton, Card, Navigate, Form } from './styles';
import { useNavigate } from "react-router-dom";

export default function BitcoinDashboard() {
  const navigate = useNavigate();
  function nav(path) {
    navigate(path)
  }

  return (
    <Container>
      <Card>
        <Divbutton>
          <Navigate onClick={() => { nav('/tesouro') }}>
            Tesouro Prefixado
            </Navigate>
          <Navigate onClick={() => { nav('/bitcoin') }}>
            BitCoin
            </Navigate>
        </Divbutton>
        <Form>
          <h1> Bitcoin</h1>
        </Form>
      </Card>
    </Container>
  );
}
