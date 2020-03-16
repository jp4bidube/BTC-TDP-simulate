import React, { useState, useEffect } from 'react';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Container } from './styles'
import { useSelector } from 'react-redux'

export default function Chart({ type }) {

  const dataChart = useSelector(state => state.data);
  if (type == 'line') {
    return (
      <Container>
        <ResponsiveContainer height={300}>
          <LineChart
            data={dataChart}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="valor" stroke="#644789" fill="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <ResponsiveContainer height={300}>
          <AreaChart
            data={dataChart}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="valor" stroke="#644789" fill="#8884d8" activeDot={{ r: 8 }} />
          </AreaChart>
        </ResponsiveContainer>
      </Container>
    );
  }
}
