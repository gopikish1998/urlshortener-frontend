import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import env from './Settings'
import axios from 'axios';
function Shorten() {
    const [url, setUrl] = useState('')
    let history = useHistory()
    useEffect(() => {
        let token=window.localStorage.getItem('url_login');
        if(!token){history.push('/')}
        
    }, [])
    let handleSubmit = async (e)=>{
        e.preventDefault()
        let logindata = await axios.post(`${env.api}/url`,{url},{headers:{
            "Authorization":window.localStorage.getItem("url_login")
        }});
        history.push('/mylist')
    }
    return (
        <div className='container dashboard'>
            <form className='form-inline' onSubmit={e=>handleSubmit(e)}>
                <div class="form-group">
                    <label for="url" className='sr-only .sr-only-focusable '>URL:</label>
                    <input type="url" class="form-control" id="url" placeholder='Paste the URL' value={url} onChange={e=>setUrl(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary ml-lg-3">Submit</button>
            </form>
        </div>
    )
}

export default Shorten
