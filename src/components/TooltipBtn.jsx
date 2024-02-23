import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function TooltipBtn(props) {
    return (
        <OverlayTrigger placement='right' delay={{ show: 250, hide: 400 }} overlay={<Tooltip id='button-tooltip-2'>{props.name}</Tooltip>}>
            <Button variant='dark' className='d-inline-flex align-items-center'>
                <span>{props.icon}</span>
            </Button>
        </OverlayTrigger>
    )
}

export default TooltipBtn;