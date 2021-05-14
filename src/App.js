import './App.scss';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact';

class App extends Component {

  state = {
    cart: 0,
    products: [],
    response: false,
  }
  /* Fetch products from Products API endpoint */
  productHandler = () => {
    fetch('https://corebiz-test.herokuapp.com/api/v1/products')
      .then(response => response.json())
      .then(response => this.setState({ products: response, response: true }))
      .then(this.setState({ cart: parseInt(window.localStorage.getItem('cart')) }))
  }

  /* Cart Counter stores cart amount in localstorage*/
  cartHandler() {
    const count = window.localStorage.setItem('cart', this.state.cart + 1);
    this.setState({ cart: parseInt(window.localStorage.getItem('cart')) })
    /*     const local = () => {
          window.localStorage.setItem('cart', this.state.cart)
        } */
  }

  componentDidMount() {
    this.productHandler()
  }


  render() {


    return (

      <div className="App">
        <Navbar cart={this.state.cart} />
        <Banner />
        <Products
          products={this.state.products}
          cart={this.cartHandler.bind(this)}
        />
        <Contact />
        <Footer />
      </div>
    );
  }
}


export default App;
