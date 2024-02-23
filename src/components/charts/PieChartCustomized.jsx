import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 250 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 350 },
];

const COLORS = ['#00A9FF', '#00C49F', '#D14D72', '#E38B29'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Example extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart width={400} height={400}>
                    <Pie data={data} cx='50%' cy='40%' labelLine={false} label={renderCustomizedLabel} outerRadius={100} fill='#8884d8' dataKey='value'>
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        )
    }
}