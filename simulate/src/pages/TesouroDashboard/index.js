import React, { useState, useEffect } from "react";
import {
  Container,
  Divbutton,
  Card,
  Navigate,
  Form,
  Label,
  SubmitButton,
  Select,
  Inputblock,
  DivChart,
  Divcontent,
  Title
} from "./styles";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart";
import { useDispatch } from "react-redux";

export default function TesouroDashboard() {
  const [value, setValue] = useState(2000);
  const [date, setDate] = useState(12);
  let data = [];

  function setMonth(month) {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Abr";
      case 5:
        return "Mai";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Ago";
      case 9:
        return "Set";
      case 10:
        return "Out";
      case 11:
        return "Nov";
      case 12:
        return "Dez";
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function nav(path) {
    navigate(path);
  }

  async function handleData() {
    const taxaMensal = 0.1 / 12;
    let sum = value * taxaMensal;
    let total = value;

    let startDate = new Date();
    startDate.setMonth(startDate.getMonth() - date);

    for (let i = 0; i < date; i++) {
      total += sum;

      let month = await setMonth(startDate.getMonth() + 1);
      startDate.setMonth(startDate.getMonth() + 1);
      console.log(month);
      let obj = {
        name: month,
        valor: total.toFixed(2)
      };
      data.push(obj);
    }

    dispatch({
      type: "TDP_SIMULATE",
      data: data
    });
  }

  useEffect(() => {
    dispatch({
      type: "",
      data: data
    });
  }, [data, dispatch]);

  return (
    <Container>
      <Card>
        <Divbutton>
          <Navigate
            onClick={() => {
              nav("/tesouro");
            }}
          >
            Tesouro Prefixado
          </Navigate>
          <Navigate
            onClick={() => {
              nav("/bitcoin");
            }}
          >
            BitCoin
          </Navigate>
        </Divbutton>
        <Title>Tesouro Direto Prefixado</Title>

        <Divcontent>
          <Form>
            <Inputblock>
              <Label>Valor inicial</Label>
              <Select
                onChange={e => {
                  setValue(Number(e.target.value));
                }}
              >
                <option value="2000">R$ 2.000,00</option>
                <option value="10000">R$ 10.000,00</option>
              </Select>
            </Inputblock>
            <Inputblock>
              <Label>Data Inicial</Label>
              <Select
                onChange={e => {
                  setDate(Number(e.target.value));
                }}
              >
                <option value="12">1 ano atras</option>
                <option value="24">2 anos atras</option>
              </Select>
              <SubmitButton type="button" onClick={handleData}>
                Simular
              </SubmitButton>
            </Inputblock>
          </Form>
          <DivChart>
            <Chart type="line"></Chart>
          </DivChart>
        </Divcontent>
      </Card>
    </Container>
  );
}
