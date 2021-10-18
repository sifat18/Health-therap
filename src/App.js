import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nopage from './Components/NoPage/Nopage';
import Resource from './Components/Resources/Resource';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'> <Home></Home>
          </Route>
          <Route exact path='/home'><Home></Home> </Route>
          <Route path='/about'> <About></About></Route>
          <Route path='/resource'><Resource></Resource> </Route>
          <Route exact path='/services'> </Route>
          <Route exact path='/appointment'> </Route>
          <Route path='/services/:key'> </Route>
          <Route path='*'>
            <Nopage></Nopage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
