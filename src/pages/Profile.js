import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Repositories from '../components/Repositories';
import { GithubContext } from '../context/github/githubContext';

export const Profile = ({match}) => {
    const {getUser, getReps, user, loading, repositories} = useContext(GithubContext)
    const urlName  = match.params.name;

    useEffect(() => {
        getUser(urlName)
        getReps(urlName)
    }, [])

    if (loading) {
        return  <p className='text-center'>Loading...</p>
    }

    const {
        name, company, avatar_url,
        public_repos, public_gists, followers, following,
        location, bio, blog, login, html_url, 
    } = user
    
    return (
        <Fragment>
            <Link to='' className='btn btn-link'>To main</Link>

            <div className='card mb-4'>
                <div className='card body'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img src={avatar_url} alt={name} style={{width: '200px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className='col'>
                            {bio && <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                                </Fragment>}
                                <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-dark'>Open profile</a>
                                <ul>
                                    {login && <li>
                                        <strong>Username: </strong> {login}
                                        </li>}

                                        {company && <li>
                                        <strong>Company: </strong> {company}
                                        </li>}

                                        {blog && <li>
                                        <strong>Website: </strong> {blog}
                                        </li>}
                                </ul>
                                <div className='badge badge-primary mr-2'> Followers: {followers} </div>
                                <div className='badge badge-secondary mr-2'> Following: {following} </div>
                                <div className='badge badge-danger mr-2'> Repositories: {public_repos} </div>
                                <div className='badge badge-warning text-dark'> Gists: {public_gists} </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repositories repositories={repositories}/>
        </Fragment>
    )
}