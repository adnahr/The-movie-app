import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import  Logo from './Pictures/search_logo.png';
import {API_URLS} from './const/redux.const';
import store from './store';
import Axios from 'axios';
import Proba from './types/df';
import { logDOM } from '@testing-library/react';
const indexPage:React.FC = () => 
<div id="main">
  <div>
    <nav id="navbar">
      <ul>
        <li>Movies</li>
        <li>Tv shows</li>
      </ul>
    </nav>
  </div>
<div id="containter">
  <div id="search">
    <div id="searchlogo">

      <img src={Logo} />
      </div>
    
    <input  />
    </div>

<div id="list">
  
<div className="card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" />
  <div className="card_container">
  <h1><b>Movie title</b></h1>
  
</div>
</div>
<div className="card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" />
  <div className="card_container">
  <h1><b>Movie title</b></h1>
  
</div>
</div>
<div className="card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" />
  <div className="card_container">
  <h1><b>Movie title</b></h1>
 
</div>
</div>
<div className="card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" />
  <div className="card_container">
  <h1><b>Movie title</b></h1>
 
</div>
</div>
</div>
</div>
</div>
const a:Proba = {
  a:"gsg"
}

function app() {

  Axios.get(API_URLS.MOVIE("550")).then(
    (res : any) => {console.log(res)}
  )
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={indexPage} />
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default app;