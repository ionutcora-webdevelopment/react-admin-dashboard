import React from 'react';
import Card from 'react-bootstrap/Card';
import PieChartComponent from './charts/PieChartComponent';

function TopCard(props) {
    return (
        <Card className='h-100 bg-body-tertiary shadow'>
            <Card.Body className='d-flex align-items-center justify-content-between'>
                <div>
                    <Card.Title className='fs-2 fw-bold'>{props.title}</Card.Title>
                    <Card.Text className='fs-4'>{props.text}</Card.Text>
                </div>
                <PieChartComponent COLORS={[props.color1, props.color2]} value1={props.val1} value2={props.val2} />
            </Card.Body>
        </Card>
    )
}

export default TopCard;