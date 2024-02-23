import React from 'react';
import TooltipBtn from './TooltipBtn';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BsCalendarWeekFill } from 'react-icons/bs';
import { BsFillGearFill } from 'react-icons/bs';
import { BsCartFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';

function Navigation() {
    return (
        <div className='h-100 d-flex flex-column justify-content-between pb-5'>
            <ul className='nav flex-column list-unstyled'>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<BsFillHouseDoorFill />} name='Home' />
                </li>
            </ul>
            <ul className='nav flex-column list-unstyled'>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<BsEnvelopeFill />} name='Email' />
                </li>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<BsCalendarWeekFill />} name='Calendar' />
                </li>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<BsFillGearFill />} name='Settings' />
                </li>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<BsCartFill />} name='Cart' />
                </li>
            </ul>
            <ul className='nav flex-column list-unstyled mb-5'>
                <li className='nav-item my-2 d-flex justify-content-center'>
                    <TooltipBtn icon={<RiLogoutBoxRFill />} name='Logout' />
                </li>
            </ul>
        </div>
    )
}

export default Navigation;