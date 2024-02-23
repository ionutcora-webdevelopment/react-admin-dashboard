import React, { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Tue',
        uv: 868,
        pv: 967,
        amt: 1500,
    },
    {
        name: 'Wed',
        uv: 1400,
        pv: 1000,
        amt: 999,
    },
    {
        name: 'Thu',
        uv: 1450,
        pv: 1200,
        amt: 1100,
    },
    {
        name: 'Fri',
        uv: 1520,
        pv: 1100,
        amt: 1200,
    },
    {
        name: 'Sat',
        uv: 1400,
        pv: 650,
        amt: 1700,
    },
]

export default class Example extends PureComponent {
    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart width={500} height={400} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                        <CartesianGrid stroke='#f5f5f5' />
                        <XAxis dataKey='name' scale='band' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type='monotone' dataKey='amt' fill='#CDF5FD' stroke='#00A9FF' />
                        <Bar dataKey='pv' barSize={20} fill='#00A9FF' />
                        <Line type='monotone' dataKey='uv' stroke='#ff7300' />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        )
    }
}