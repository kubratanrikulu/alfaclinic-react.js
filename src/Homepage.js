import React from 'react'
import home from './img/home.png';
import logo from './img/logo.svg'
const homePage = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={home} alt="Logo" className='w-100' />
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-center flex-column'>
                    <img src={logo} alt="Logo" className='mb-5' />
                    <div className='card'>
                        <h1 className='dark-blue fw-bold'>Welcome</h1>
                        <p>Please enter your details</p>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control rounded-pill " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Company ID' />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control rounded-pill " id="exampleInputPassword1"
                                    placeholder='Password' />
                            </div>
                            <div className='ex-info d-flex justify-content-between'>
                                <div className='info-1'>
                                    <div class="form-check">
                                        <input className="form-check-input dark-blue " type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label dark-blue font-400" for="flexCheckChecked">
                                            Keep me logged in
                                        </label>
                                    </div>
                                </div>
                                <div className='info-2'>
                                    <p className='dark-blue font-400'>Forget password?</p>
                                </div>
                            </div>
                            <button type="submit" className=" sign-in w-100 border-0 p-3 text-white">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homePage