import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap from node modules
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'


class App extends Component {
  render() {
    return (
      <React.Fragment>  {/* html tag instead a <div></div> */}
        <Navbar /> {/* navbar always present*/}
        <Switch>
          <Route exact path="/" component={ProductList} /> {/* exact pour eviter que le match sur "/" fasse areter le routing  */}
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;


 {/* pour tester bootstrap et fonts

 <div className="container">
        <div className="row">
        <div className="col-6">column number one</div>
        <div className="col-6">
          <span>
            <i className="fas fa-home" />
          </span>
          </div>
        </div>
      </div> */}