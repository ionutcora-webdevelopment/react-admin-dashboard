import React from 'react';

function TitleHeader() {
    return (
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
            <h1 className='h2'>Dashboard</h1>
            <div className='btn-toolbar mb-2 mb-md-0 mx-2'>
                <button className='btn btn-dark position-relative shadow' type='button'>
                    Inbox
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                        99+
                        <span className='visually-hidden'>unread messages</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default TitleHeader;