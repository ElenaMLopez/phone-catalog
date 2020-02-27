import React from 'react';
import  { Home }  from './components/Home'


import './App.css';

function App() {
  // const url = new URL(document.location)
  // const Page = url.searchParams.has('id')
  // ? <ProductInfo url={url.searchParams.get('id')}/>
  // : <Home />

  return (
    <div className="App">
      <Home />
    </div>
 
  );
}

export default App;
