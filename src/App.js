import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Nopage from './Components/NoPage/Nopage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Resource from './Components/Resources/Resource';
import Success from './Components/Success/Success';

function App() {
  return (
    <AuthProvider className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'> <Home></Home>
          </Route>
          <Route exact path='/home'><Home></Home> </Route>
          <Route path='/about'> <About></About></Route>
          <PrivateRoute path='/resource'><Resource></Resource> </PrivateRoute>
          <PrivateRoute path='/appointment'><Appointment></Appointment> </PrivateRoute>
          <Route path='/register'><Register></Register> </Route>
          <Route path='/login'><Login></Login> </Route>
          <PrivateRoute path='/success'><Success></Success> </PrivateRoute>
          <PrivateRoute path='/services/:key'><Details></Details> </PrivateRoute>
          <Route path='*'>
            <Nopage></Nopage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
