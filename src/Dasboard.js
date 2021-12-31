import axios from 'axios'
import React, { useEffect, useState } from 'react'
import env from './Settings'
function Dasboard() {
    const [urls, setUrl] = useState([])
    const [clicks,setClicks]= useState([])
    let fetchUrls = async ()=>{
        let urls = await axios.get(`${env.api}/geturls`,{headers:{
            "Authorization":window.localStorage.getItem("url_login")
        }})
        console.log(urls.data)
        setUrl(urls.data)
        // setClicks(urls.filter((obj)=>{return obj.clicks}))
    }
    // let click=()=>{
    //     let clicked= urls.filter((obj)=>{obj.clicks>0})
    //     console.log(clicked)
    //     setClicks([])
    // }
    useEffect(async() => {
        await fetchUrls()
        // click()
    }, [])

    return (
        <div class="container ">
            {
                window.localStorage.getItem('url_login')?<div class="row dashboard">
                <div class="col-md">
                <div class="card-counter primary">
                    {/* <i class="fa fa-code-fork"></i> */}
                    <span class="count-numbers">{urls.length}</span>
                    <span class="count-name">URLs</span>
                </div>
                </div>
{/* 
                <div class="col-md-3">
                <div class="card-counter danger">
                    <i class="fa fa-ticket"></i>
                    <span class="count-numbers">599</span>
                    <span class="count-name">URLs today</span>
                </div>
                </div>

                <div class="col-md-3">
                <div class="card-counter success">
                    <i class="fa fa-database"></i>
                    <span class="count-numbers">6875</span>
                    <span class="count-name">URLs this month</span>
                </div>
                </div> */}

                <div class="col-md">
                <div class="card-counter info">
                    {/* <i class="fa fa-users"></i> */}
                    <span class="count-numbers">{urls.length?urls.map(obj=>obj.clicks).reduce((a,b)=>a+b):0}</span>
                    <span class="count-name">Total Clicks</span>
                </div>
                </div>
            </div>:
            <div className='titles d-flex flex-column justify-content-center'><h1 className='bb'>Welcome to URL Shortener app</h1><h3>Please Login/Sign UP to continue</h3></div>
            }
        </div>
    )
}

export default Dasboard
