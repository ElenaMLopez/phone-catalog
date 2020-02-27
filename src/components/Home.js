import React, { Component } from 'react';
import { ProductsList } from './Products-list'
import { Detail } from './Detail'

export class Home extends Component {

  render () {    

    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail url={url.searchParams.get('id')} onClick={this._getProductInfo}/>
    : <ProductsList />

    return (
      <div>
        <p>header (solo render)</p>
          {Page}
        <p>footer solo render</p>
      </div>
    )
  }
}
  