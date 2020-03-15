import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Container } from './styles'
import { useSelector } from 'react-redux'

export default function Chart() {

  const dataChart = useSelector(state => state.data);
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
}
