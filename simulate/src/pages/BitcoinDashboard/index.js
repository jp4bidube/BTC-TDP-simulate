import React, { useState, useEffect } from 'react';
import { Container, Divbutton, Card, Navigate, Form, Label, SubmitButton, Select, Inputblock, DivChart, Divcontent, Title } from './styles';
import { useNavigate } from "react-router-dom";
import Chart from '../../components/Chart'
import { useDispatch } from 'react-redux'
import BitcoinService from './BitcoinService'

export default function BitcoinDashboard() {
  const [value, setValue] = useState(2000);
  const [date, setDate] = useState(12);
  let data = []

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function nav(path) {
    navigate(path)
  }

  async function handleData() {
    data = await BitcoinService(value, date)
    dispatch({
      type: "BTC_SIMULATE", data: data
    });
  }

  useEffect(() => {
    dispatch({
      type: "", data: data
    });
  }, [])

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
        <Title>Bitcoin</Title>

        <Divcontent>
          <Form>
            <Inputblock>
              <Label>Valor inicial</Label>
              <Select onChange={(e) => { setValue(Number(e.target.value)) }}>
                <option value="2000">R$ 2.000,00</option>
                <option value="10000">R$ 10.000,00</option>
              </Select>
            </Inputblock>
            <Inputblock>
              <Label>Data Inicial</Label>
              <Select onChange={(e) => { setDate(Number(e.target.value)) }}>
                <option value="12">1 ano atras</option>
                <option value="24">2 anos atras</option>
              </Select>
              <SubmitButton type='button' onClick={handleData}>Simular</SubmitButton>
            </Inputblock>
          </Form>
          <DivChart>
            <Chart></Chart>
          </DivChart>
        </Divcontent>
      </Card>
    </Container>
  );
}
