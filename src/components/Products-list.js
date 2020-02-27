import React, { Component } from 'react';
import axios from 'axios';


export class ProductsList extends Component {
  state = { productsList: [] }

  componentDidMount () {
    axios('http://localhost:8080/phones')
      .then( results => {
        console.log(results.data);
        this.setState({ productsList: results.data })
      })
      .catch( e => console.log('Request error', e))
  }

  onClick = (e) =>{
   return this.props.onClick
  }

   _renderProducts = () =>{
    
    return (this.state.productsList.map((product) => {
      return (
        <a 
          key={product.id} 
          href={`?id=${product.name.replace(/ /g, "")}`}
          onClick={this.onClick}
          >
          <li className='product-list--item'>
            <p>Name: {product.name}</p>
            <img 
              alt={product.name} 
              src={`../../images/${product.imageFileName}`}
              className='product-list--image'
              />
            <p>Brand: {product.manufacturer}</p>
            <p>Price: {product.price}</p>
            <p>Processor: {product.processor}. Ram: {product.ram}. Screen: {product.screen}</p>
          </li> 
        </a>
      )
    })
    )
  }

  _getUrl () { 

  }

  render () {
    return (
      <div>
        <ul>
          {this._renderProducts()}
        </ul>
      </div>
      )
    }
  }