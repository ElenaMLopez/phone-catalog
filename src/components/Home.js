import React, { Component } from 'react';
import { ProductsList } from './Products-list'
import { Detail } from './Detail'
import { Header } from './Header';

export class Home extends Component {

  render () {    

    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
    ? <Detail url={url.searchParams.get('id')} onClick={this._getProductInfo}/>
    : <ProductsList />

    return (
      <div>
        <div className='first-container'>
          <Header className='header-container'/>
        </div>
        <div className='second-container'>
            {Page}
        <footer className='footer-container'> Acme phone inc | @2020 working in </footer>
        </div>
      </div>
    )
  }
}
  