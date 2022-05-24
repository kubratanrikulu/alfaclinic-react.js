import React from 'react'
import out from './out.svg'
import logo from './logo.svg'
import Home from './Home.svg'
const Customerpage = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-3'>
            <img src={out} alt="Logo" className='' />
            <img src={logo} alt="Logo" className='' />
            <div className='item'>
                <div className='item-1 d-flex '>
                <img src={Home} alt="Logo" className='' />
                <p className='gray font-400 align-items-center font-14'>Item</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Customerpage