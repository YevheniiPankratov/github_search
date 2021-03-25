import axios from 'axios';
import React, {useReducer} from 'react'
import { CLEAR_USERS, GET_REPS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = url => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {
    const initialState = {
        user: {}, 
        users: [],
        loading: false,
        repos: []
    }
    
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const {user, users, loading, repos} = state
    
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const setLoading = () => dispatch({type: SET_LOADING})
    
    const searchUsers = async value => {
        setLoading()

        const response = await axios.get(withCreds(`https://api.github.com/search/users?q=${value}&`))

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

    const getUser = async name => {
        setLoading()
        
        const response = await axios.get(withCreds(`https://api.github.com/users/${name}?`))

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const getReps = async name => {
        setLoading()

        const response = await axios.get(withCreds(`https://api.github.com/users/${name}/repos?per_page=6&`))

        dispatch({
            type: GET_REPS,
            payload: response.data
        })
    }

    

    return (
        <div>
            <GithubContext.Provider value={{
                clearUsers, searchUsers, getReps, getUser, setLoading, 
                user, users, loading, repos
            }}>
                {children}
            </GithubContext.Provider>
        </div>
    )
}
