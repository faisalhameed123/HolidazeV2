import React from 'react';
import ReactDom from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Redirect from './components/Redirect';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Accomodations from './pages/Accomodations';
import SignIn from './pages/Signin';
import Enquiry from './pages/Enquiry';
import Dashboard from './pages/Add-estab';
import EstRecord from './pages/Est-record';
import AdminContact from './pages/AdminContact';
import Record from './pages/Record';
import CardSpecComponent from './pages/CardSpec';

ReactDom.render(
  <Router>
        <App>
          <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/accomodations" exact component={Accomodations} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/signin" exact component={SignIn} /> 
              <Route path="/cardSpecComponent/:id" exact component={CardSpecComponent} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/est-record" exact component={EstRecord} />
              <Route path="/admincontact" exact component={AdminContact} /> 
              <Route path="/record" exact component={Record} />
              <Route path="/enquiry/:id" exact component={Enquiry} />   
              <Route path='/faceb'render={(props) => <Redirect {...props} loc="https://www.facebook.com" />} />  
              <Route path='/twitte'render={(props) => <Redirect {...props} loc="https://www.twitter.com" />} />
              <Route path='/instag'render={(props) => <Redirect {...props} loc="https://www.instagram.com" />} />  
              <Route path='/tripm'render={(props) => <Redirect {...props} loc="https://www.tripadvisor.com" />} />          
          </Switch>
        </App>
  </Router>,
      document.getElementById('root')

);