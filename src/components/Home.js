import React, { Component } from 'react';
import { ProductsList } from './Products-list'
import { Detail } from './Detail'

export class Home extends Component {

  state = {
      id: 0,
      name: '',
      manufacturer: '',
      description: '',
      color: '',
      price: 0,
      imageFileName: '',
      screen: '',
      processor: '',
      ram: 0,
      url: ''
  }
  
  render () {    


    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail url={url.searchParams.get('id')} onClick={this._getProductInfo}/>
    : <ProductsList />

    return (
      <div>
        <h5>home</h5>
        <p>header (solo render)</p>
          {Page}
        <p>footer solo render</p>
      </div>
    )
  }
}
  