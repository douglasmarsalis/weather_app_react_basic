import React, {useState} from 'react'
import axios from 'axios'

function App() {

  //const url = 'http://api.weatherapi.com/v1/current.json?key=62143c60b90d4257891103525241006&q=dallas'

  return (
    <div className="app">
      <div className='container'>

        {/* Top information */}
       <div className='top'>
        <div className='location'>
          <p>Dallas</p>
        </div>
        <div className='temp'>
            <h1>60°F</h1>
        </div>
        <div className='description'>Clouds</div>
       </div>

       {/* Bottom information */}
        <div className='bottom'>
          <div className='feels'>
            <p>65°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
