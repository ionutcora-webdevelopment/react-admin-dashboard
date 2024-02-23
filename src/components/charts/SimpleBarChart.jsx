import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 7000,
        pv: 5400,
        amt: 2400,
    },
    {
        name: 'Tue',
        uv: 3000,
        pv: 1400,
        amt: 2200,
    },
    {
        name: 'Wed',
        uv: 9800,
        pv: 4400,
        amt: 2300,
    },
    {
        name: 'Thu',
        uv: 1780,
        pv: 5900,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: 1890,
        pv: 4800,
        amt: 2100,
    },
    {
        name: 'Sat',
        uv: 8300,
        pv: 6800,
        amt: 2500,
    },
    {
        name: 'Sun',
        uv: 8500,
        pv: 9400,
        amt: 2100,
    },
]

export default class SimpleBarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='pv' fill='#00A9FF' activeBar={<Rectangle fill='#D14D72' stroke='blue' />} />
                    <Bar dataKey='uv' fill='#82ca9d' activeBar={<Rectangle fill='#E38B29' stroke='purple' />} />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}