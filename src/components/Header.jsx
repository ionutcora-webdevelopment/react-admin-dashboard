import React from 'react';
import { FaReact } from "react-icons/fa6";

function Header() {
    return (
        <header className='navbar sticky-top bg-dark flex-md-nowrap p-0 shadow' data-bs-theme='dark'>
            <a className='navbar-brand col-md-3 col-lg-2 me-0 p-3 fs-6 text-white fw-bold d-flex align-items-center' href='/'>
                <FaReact /> 
                <span className='mx-2'>React Dashboard</span>
            </a>
            <form className='d-flex mx-4 d-none d-md-flex' role='search'>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>
        </header>
    )
}

export default Header;