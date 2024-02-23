import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 7500,
        pv: 5400,
        amt: 2400,
    },
    {
        name: 'Tue',
        uv: 3500,
        pv: 1200,
        amt: 2210,
    },
    {
        name: 'Wed',
        uv: 3000,
        pv: 7500,
        amt: 2290,
    },
    {
        name: 'Thu',
        uv: 2756,
        pv: 3900,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: 1900,
        pv: 4800,
        amt: 2100,
    },
    {
        name: 'Sat',
        uv: 2400,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sun',
        uv: 8500,
        pv: 6300,
        amt: 2100,
    },
];

export default class SimpleLineChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey='pv' stroke='#00A9FF' activeDot={{r: 8}} />
                    <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}