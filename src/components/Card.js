import React from 'react';
import {Link} from 'react-router-dom'

export const Card = () => {
    return (
            <div className='card'>
                <img src={''} alt={''} className='card-img-top'/>
                <div className='card-body'>
                    <h4 className='card-title'>
                        React js
                    </h4>
                    <Link to={'/profile/'} className={'btn btn-dark'}>Open</Link>
                </div>
            </div>
    )
}
