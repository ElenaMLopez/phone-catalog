import React, { Component } from 'react';
import axios from 'axios';


export class Detail extends Component {
  state = {
    product: [],
  }
  componentDidMount () {
    axios('http://localhost:8080/phones')
      .then( results => {
        const url = new URL(document.location)
        const urlId = url.searchParams.get('id')
        const product = results.data.find( product => product.name.replace(/ /g, "") === urlId )
        this.setState({ product })
      })
      .catch( e => console.log('Request error', e))
     
  }
  render () {
    

    return (

      <div className='detail-info--container'>
        <ul className='detail-info--list-item'>
          <li className='detail-info--item'>
            <img 
            className='detail-info--image'
            src={`../../images/${this.state.product.imageFileName}`} 
            alt={this.state.product.name} />
            </li>
          <li className='detail-info--item'><strong>Name</strong>: {this.state.product.name}</li>
          <li className='detail-info--item'><strong>Made by:</strong>: {this.state.product.manufacturer}</li>
          <li className='detail-info--item'><strong>Description</strong>: {this.state.product.description}</li>
          <li className='detail-info--item'><strong>Color</strong>: {this.state.product.color}</li>
          <li className='detail-info--item'><strong>Price</strong>: {this.state.product.price}</li>
          <li className='detail-info--item'><strong>Screen Size</strong>: {this.state.product.screen}</li>
          <li className='detail-info--item'><strong>Processor</strong>: {this.state.product.processor}</li>
          <li className='detail-info--item'><strong>RAM</strong>: {this.state.product.ram} Gb</li>
        </ul>
    </div>
    )  
  }
}

