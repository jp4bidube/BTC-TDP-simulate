import React from "react";
import api from "../../services/api";

export default async function BitcoinService(value, date) {
  let data = [];
  let endDate = new Date().toJSON().slice(0, 10);
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - date);
  let dayValue = 0;

  // Call api to recive date in USD
  data = await api
    .get("https://api.coindesk.com/v1/bpi/historical/close.json", {
      params: {
        start: startDate.toJSON().slice(0, 10),
        end: endDate
      }
    })
    .then(function(response) {
      let res = JSON.stringify(response.data.bpi);
      res = res.replace("{", "");
      res = res.replace(/"/g, "");
      res = res.split(",");

      res.map(element => {
        let arr = element.split(":");
        let obj = { name: arr[0], valor: arr[1] };
        data.push(obj);
      });

      return data;
    })
    .catch(function(error) {
      console.log(error);
    });
  let USD = await api
    .get("https://economia.awesomeapi.com.br/all/USD-BRL")
    .then(response => {
      return response.data.USD.ask;
    });

  data.map(obj => {
    obj.valor = obj.valor * USD;
    obj.valor = obj.valor.toFixed(2);
    dayValue = value / obj.valor;
    obj.valor = dayValue;
    obj.valor = obj.valor.toFixed(3);
  });

  return data;
}
