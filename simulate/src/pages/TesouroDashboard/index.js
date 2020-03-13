import React from 'react';
import { Container, Divbutton, Card, Navigate, Form, Label, Input, Inputblock, DivChart, Divcontent, Title } from './styles';
import { useNavigate } from "react-router-dom";


export default function TesouroDashboard() {
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

        <Title>Tesouro</Title>

        <Divcontent>
          <Form>
            <Inputblock>
              <Label>Valor inicial</Label>
              <Input />
            </Inputblock>
            <Inputblock>
              <Label>Data Inicial</Label>
            </Inputblock>
          </Form>
          <DivChart></DivChart>
        </Divcontent>
      </Card>
    </Container>
  );
}
