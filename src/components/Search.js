import React from 'react';

export const Search = () => {
    return (
            <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Enter username..." aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
    )
}