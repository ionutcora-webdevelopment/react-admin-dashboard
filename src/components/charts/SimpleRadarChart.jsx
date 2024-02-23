import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Monday',
        A: 80,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Tuesday',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Wednesday',
        A: 66,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Thursday',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Friday',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Saturday',
        A: 95,
        B: 55,
        fullMark: 150,
    },
]

export default class SimpleRadarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey='subject' />
                    <PolarRadiusAxis />
                    <Radar name='Mike' dataKey='A' stroke='#00C49F' fill='#00C49F' fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}