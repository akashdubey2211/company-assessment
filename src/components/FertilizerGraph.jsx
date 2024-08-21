import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "../assests/styles.css";
const FertilizerGraph = ({ data }) => {
  return (
   <div className='chartContainer'>
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="requirement" stroke="#8884d8" />
      <Line type="monotone" dataKey="availability" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
};

export default FertilizerGraph;
