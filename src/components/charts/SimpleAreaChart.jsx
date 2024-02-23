import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Sun',
        uv: 3800,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Mon',
        uv: 3200,
        pv: 1300,
        amt: 2200,
    },
    {
        name: 'Tue',
        uv: 2500,
        pv: 9800,
        amt: 2300,
    },
    {
        name: 'Wed',
        uv: 1780,
        pv: 3900,
        amt: 2000,
    },
    {
        name: 'Thu',
        uv: 1590,
        pv: 4800,
        amt: 2100,
    },
    {
        name: 'Fri',
        uv: 2190,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sat',
        uv: 3090,
        pv: 4300,
        amt: 2100,
    },
];

export default class SimpleAreaChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart width={500} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0,}}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Area type='monotone' dataKey='uv' stroke='#D14D72' fill='#D14D72' />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}