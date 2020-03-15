import { createStore } from 'redux'

const INITIAL_STATE = {
  data: [
    {
      name: 'Jan', valor: 0,
    },
    {
      name: 'Feb', valor: 0,
    },
    {
      name: 'Mar', valor: 0,
    },
    {
      name: 'Apr', valor: 0,
    },
    {
      name: 'May', valor: 0,
    },
    {
      name: 'Jun', valor: 0,
    },
    {
      name: 'Jul', valor: 0,
    },
    {
      name: 'Aug', valor: 0,
    },
    {
      name: 'Sep', valor: 0,
    },
    {
      name: 'Oct', valor: 0,
    },
    {
      name: 'Nov', valor: 0,
    },
    {
      name: 'Dec', valor: 0,
    },
  ]
};

function chartData(state = INITIAL_STATE, action) {
  console.log(action.data)
  switch (action.type) {
    case 'TDP_SIMULATE':
      state = INITIAL_STATE
      return { state, data: action.data }
    case 'BTC_SIMULATE':
      state.data = INITIAL_STATE
      return { state, data: INITIAL_STATE.data }
    default:
      state = INITIAL_STATE
      return state
  }
}

const store = createStore(chartData);

export default store;
