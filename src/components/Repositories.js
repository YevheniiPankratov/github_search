import React from 'react'

export default function Repositories({repositories}) {
    return (
        <div>
            {repositories.map(repo => (
                <div className='card mb-3' key={repo.id}>
                    <div className='card-body'>
                        <h4>
                            <a href={repo.html_url} target='_blank' rel='noreferrer'>{repo.name}</a>
                        </h4>
                    </div>

                </div>
            ))}  
        </div>
    )
}
