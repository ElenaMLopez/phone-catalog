import React, { Component } from 'react';
import axios from 'axios';


export class ProductsList extends Component {
  state = { productsList: [] }

  componentDidMount () {
    axios('http://localhost:8080/phones')
      .then( results => {
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
          className='product-list--link'
          key={product.id} 
          href={`?id=${product.name.replace(/ /g, "")}`}
          onClick={this.onClick}
          >
          <li className='product-list--item'>
            <div className='product-list--item-head'>
              <h3 className='product-list--item-title'>{product.name}</h3>
              <img 
                alt={product.name} 
                src={`../../images/${product.imageFileName}`}
                className='product-list--image'
                />
            </div>
            <div className='product-list-item--info-display'>
              <p className='product-list-item--info'>Price: {product.price} | Brand: {product.manufacturer}</p>
              <p className='product-list-item--info'>Processor: {product.processor}. </p>
              <p>Ram: {product.ram}. </p>
              <p>Screen: {product.screen}</p>
            </div>
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