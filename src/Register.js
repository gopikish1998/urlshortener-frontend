import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import env from './Settings'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory()
    let handleSubmit= async function(e){
        e.preventDefault();
        await axios.post(`${env.api}/register`,{name,email,password});
        alert("Confirmation email sent!")
        history.push("/login")
    }
    return (
        <div className='container login-container '>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3 className='justify-content-center'>URL Shortener</h3>
                    <p>Welcome! Please Register</p>
                </div>
                <div className='col-md-6 login-form-2'>
                    <h3 >Register</h3>
                    <form onSubmit={e=>handleSubmit(e)}>
                            <div className="form-group">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id='name' placeholder="Name" onChange={e=>setName(e.target.value)} value={name} />
                            </div>
                            <div className="form-group">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id='email' placeholder="Your Email" onChange={e=>setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id='password' placeholder="Your Password" onChange={e=>setPassword(e.target.value)} value={password} />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Register" />
                            </div>
                            <div className="form-group">
                                {/* <a href="#" className="ForgetPwd">Forget Password?</a> */}
                                <Link to="/login" className='links'>Already have an account?</Link>
                            </div>
                        </form>
                </div>
            </div>           
        </div>
    )
}

export default Register
