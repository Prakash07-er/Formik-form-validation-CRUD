import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Footer from './Dashboard/footer';

import { 
  
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";
import Userlist from './userlist';
import Useredit from './useredit';
import Usercreate from './usercreate';
import Profilelist from './profilelist';
import Dashbaoard from './Dashboard/card';
import Profiledit from './profileedit';
import Profilecreate from './profileCreate'

import {UserProvider} from './userContext';
import {ProfileProvider} from './profileContext'


export default function App() {
  return (
    <Router>

    <div id="wrapper">
    <UserProvider>
      <ProfileProvider>
         <Sidebar></Sidebar>
         <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
           <Topbar></Topbar>
           <div class="container-fluid">

               <Switch>
                <Route path="/dashboard" component={Dashbaoard}></Route>
                 <Route path= "/users" component={Userlist} exact={true}></Route>
                 <Route path ="/usercreate" component={Usercreate} exact={true}></Route>
                 <Route path= "/useredit/:id" component={Useredit} exact={true}></Route>
                 <Route path="/profile" component={Profilelist} exact={true}></Route>
                 <Route path='/profileedit/:id' component={Profiledit}></Route>
                 <Route path="/profileCreate" component={Profilecreate}></Route>
               </Switch>
           </div>
         </div>
         <Footer></Footer>
         </div>
         </ProfileProvider>
         </UserProvider>
    </div>
    </Router>
  )
}


