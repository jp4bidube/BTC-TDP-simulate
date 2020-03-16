import { createStore } from "redux";

const INITIAL_STATE = {
  data: [
    {
      name: "Jan",
      valor: 0
    },
    {
      name: "Feb",
      valor: 0
    },
    {
      name: "Mar",
      valor: 0
    },
    {
      name: "Abr",
      valor: 0
    },
    {
      name: "Mai",
      valor: 0
    },
    {
      name: "Jun",
      valor: 0
    },
    {
      name: "Jul",
      valor: 0
    },
    {
      name: "Ago",
      valor: 0
    },
    {
      name: "Set",
      valor: 0
    },
    {
      name: "Out",
      valor: 0
    },
    {
      name: "Nov",
      valor: 0
    },
    {
      name: "Dez",
      valor: 0
    }
  ]
};

function chartData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TDP_SIMULATE":
      console.log(action);
      return { state, data: action.data };

    case "BTC_SIMULATE":
      return { state, data: action.data };

    default:
      state = INITIAL_STATE;
      return { state, data: INITIAL_STATE.data };
  }
}

const store = createStore(chartData);

export default store;
