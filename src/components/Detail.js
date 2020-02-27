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

      <div>
        <p>
          <strong>Id</strong>: {this.state.product.id}
        </p>
        <p>
          <strong>Name</strong>: {this.state.product.name}
        </p>
        <p>
          <strong>manufacturer</strong>: {this.state.product.manufacturer}
        </p>
        <p>
          <strong>description</strong>: {this.state.product.description}
        </p>
        <p>
          <strong>color</strong>: {this.state.product.color}
        </p>
        <p>
          <strong>price</strong>: {this.state.product.price}
        </p>
        <p>
          <strong>imageFileName</strong>: {this.state.product.imageFileName}
        </p>
        <p>
          <strong>screen</strong>: {this.state.product.screen}
        </p>
        <p>
          <strong>processor</strong>: {this.state.product.processor}
        </p>
        <p>
          <strong>ram</strong>: {this.state.product.ram}
        </p>
    </div>
    )  
  }
}

