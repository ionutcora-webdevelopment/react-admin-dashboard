import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function PieChartComponent(props) {

    const data = [
        { name: 'Group A', value: props.value1 },
        { name: 'Group B', value: props.value2 },
    ]

    return (
        <PieChart width={100} height={100}>
            <Pie data={data} cx={50} cy={50} innerRadius={20} outerRadius={40} fill='#8884d8' paddingAngle={5} dataKey='value'>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={props.COLORS[index % props.COLORS.length]} />
                    ))
                }
            </Pie>
        </PieChart>
    )
}

export default PieChartComponent;