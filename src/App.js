import './App.css';
import Header from './components/Header';
import Mainpg from './components/Mainpg';
import Booking from './components/Booking';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Thank from './components/Thank'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header title="Hotel Paradise"/>
      <Switch>
        
          <Route exact path="/" render={()=>{
            return(<Mainpg/>)
          }}>
          </Route>

          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/thank">
            <Thank />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
