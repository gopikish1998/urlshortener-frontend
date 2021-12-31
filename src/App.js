import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import Register from './Register';
import Forgot from './Forgot';
import Reset from './Reset';
import List from './List';
import Dasboard from './Dasboard';
import Shorten from './Shorten';
function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
      <a class="navbar-brand titles" href="/">URL Shortener</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav">
          {window.localStorage.getItem('url_login')?<li class="nav-item">
            <Link class="nav-link active" to='/mylist'>My URLs</Link>
          </li>:<></>}
          {window.localStorage.getItem('url_login')?<li class="nav-item">
            <Link class="nav-link active" to='/shorten'>Create</Link>
          </li>:<></>}
        </ul>
        <ul class="nav navbar-nav ml-auto">
         {window.localStorage.getItem('url_login')? <li class="nav-item"><button onClick={()=>{window.localStorage.removeItem("url_login");window.location.reload()}} className='btn btn-outline-danger ml-lg-3'>Log Out</button></li>:      
          <li class="nav-item"><Link to='/register' className='btn btn-outline-primary ml-lg-3'>Sign Up</Link><Link to='/login' className='btn btn-outline-dark ml-lg-3'>Login</Link></li> }
        </ul>
      </div>
      </div>
      </nav>  
      {/* <Login/> */}
      <Switch>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/forgot" component={Forgot} exact={true} />
        <Route path="/reset" component={Reset} exact={true} />
        <Route path="/mylist" component={List} exact={true} />
        <Route path="/" component={Dasboard} exact={true} />
        <Route path="/shorten" component={Shorten} exact={true} />
      </Switch>
    </Router>
    
  );
}

export default App;
