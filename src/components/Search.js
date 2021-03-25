import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';
export const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (e) => {
        if (e.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            github.searchUsers(value.trim())
        } else {
            show('Enter user data')
        }
    }
    return (
            <div className="input-group flex-nowrap mb-3">
            <span className="input-group-text" id="addon-wrapping">@</span>
            <input type="text" className="form-control" placeholder="Enter username..." aria-label="Username" aria-describedby="addon-wrapping" onKeyPress={onSubmit} value={value} onChange={e => setValue(e.target.value)}/>
            </div>
    )
}