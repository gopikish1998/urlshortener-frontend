import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import env from './Settings'
function List() {
    let history = useHistory()
    const [url, setUrl] = useState([])
    let fetchUrls = async ()=>{
        let urls = await axios.get(`${env.api}/geturls`,{headers:{
            "Authorization":window.localStorage.getItem("url_login")
        }})
        console.log(urls.data)
        setUrl(urls.data)
    }
    useEffect(async() => {
        let token=window.localStorage.getItem('url_login');
        if(!token){history.push('/')}
        else{await fetchUrls()
        console.log(url)}
    }, [])
    let handleDelete = async(e,_id)=>{
      e.preventDefault();
      await axios.delete(`${env.api}/delete/${_id}`,{headers:{
        "Authorization":window.localStorage.getItem("url_login")
    }})
    fetchUrls()
    }
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <table class="table table-dark table-responsive" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">URL</th>
      <th scope="col">Short URL</th>
      <th scope="col">Clicks</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
      {url.map((obj,index)=>{return(
          <tr>
          <th scope="row">{index+1}</th>
          <td><a target="_blank" href={obj.url}>{obj.url}</a></td>
          <td><a target="_blank" href={`${env.api}/${obj.short}`}>{obj.short}</a></td>
          <td>{obj.clicks||0}</td>
          <td><button className='btn btn-outline-danger' onClick={e=>handleDelete(e,obj._id)}>DELETE</button></td>
        </tr>
      )})}
  </tbody>
</table>

        </div>
    )
}

export default List
