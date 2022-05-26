import React from 'react'
import out from './img/out.svg'
import logo from './img/logo.svg'
import Home from './img/Home.svg'
import fluent from './img/fluent_home.svg'
import person from './img/person.svg'
import person2 from './img/person2.svg'
import vektor from './img/Vector.svg'
import hotelfill from './img/hotel-fill.svg'
import fluent2 from './img/fluent_home2.svg'
import fluentservice from './img/fluent_service.svg'
import box from './img/box.svg'
import campaign from './img/campaign.svg'
import marketingplatform from './img/marketingplatform.svg'
import ItemCard from './components/ItemCard'
import England from './img/england.svg'
import Bell from './img/bell.svg'
import User from './img/user.svg'
import Logout from './img/logout1.svg'
import Export from './img/export.svg'
import Filter from './img/filter.svg'
import Plus from './img/plus1.svg'
import arrow2 from './img/arrow2.svg'
import arrow3 from './img/arrow3.svg'
import patient from './img/patient.svg'
import CustomerCard from './components/CustomerCard'

const Customerpage = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-2 p-5 items-head'>
                    <div className='items pe-5'>
                        <div className='d-flex justify-content-end mb-2 mt-2'><img src={out} alt="Logo" className='' /></div>
                        <div className='d-flex justify-content-center'><img src={logo} alt="Logo" className='w-100 mb-5' /></div>
                        <ItemCard
                            image={Home}
                            itemTitle="Item" />
                        <ItemCard
                            image={fluent}
                            itemTitle="Item" />
                        <ItemCard
                            image={person}
                            itemTitle="Item" />
                        <ItemCard
                            className="selected-item"
                            image={patient}
                            itemTitle="Item" />
                        <ItemCard
                            image={vektor}
                            itemTitle="Item" />
                        <ItemCard
                            image={hotelfill}
                            itemTitle="Item" />
                        <ItemCard
                            image={fluent2}
                            itemTitle="Item" />
                        <ItemCard
                            image={fluentservice}
                            itemTitle="Item" />
                        <ItemCard
                            image={box}
                            itemTitle="Item" />
                        <ItemCard
                            image={campaign}
                            itemTitle="Item" />
                        <ItemCard
                            image={marketingplatform}
                            itemTitle="Item" />
                    </div>
                    <p className='border-top footer-text text-start p-1 mt-5'> © Alfa Nova 2022</p>
                    <p className='gray text-start'> Lorem ipsum dolar sit amet.Lorem ipsum dolar sit amet.
                    </p>
                </div>
                <div className='col-10'>
                    <div className='row p-3'>
                        <div className='col-8'>
                            <span className='span-dash'>Dashboard / List</span>
                        </div>
                        <div className='col-4 d-flex justify-content-evenly align-items-center'>
                            <img src={England} alt="Logo" className='' />
                            <img src={Bell} alt="Logo" className='' />
                            <img src={User} alt="Logo" className='' />
                            <span className='grey-2 fw-bolder'>John Doe</span>
                            <img src={Logout} alt="Logo" className='' />
                        </div>
                    </div>
                    <div className='row table '>
                        <div className='container'>
                        <div className='col-12 px-5'>
                            <div className='row px-5'>
                                <div className='col-8'>
                                    <div class="mb-3 search mt-3">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search name, email. or etc." />
                                    </div>
                                </div>
                                <div className='col-4 d-flex justify-content-evenly mt-3'>
                                    <button type="button" className="dashboard-button border-0 d-flex justify-content-center align-items-center"><img src={Export} alt="Logo" className='me-1' />Export</button>
                                    <button type="button" className="dashboard-button border-0 flex justify-content-center align-items-center"><img src={Filter} alt="Logo" className='me-1' />Filters</button>
                                    <button type="button" className="red border-0 flex justify-content-center align-items-center"><img src={Plus} alt="Logo" className='me-1' />New Modal</button>
                                </div>
                            </div>
                        </div>
                        <div className='row px-5 rounded'>
                            <div className='col-12'>
                                <div className='row px-5'>
                                    <div className='specials d-flex justify-content-around py-4 px-0 rounded'>
                                        <div classname="form-check" style={{'width': 'calc(100% / 7)', 'display':'flex', 'justifyContent': 'center'}}>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        </div>
                                        <div className='col-71 CustomerName'>
                                            <span>Customer Name</span>
                                        </div>
                                        <div className='col-71 CustomerNumber'>
                                            <span>Phone Number</span>
                                        </div>
                                        <div className='col-71 CustomerCountry'>
                                            <span>Country</span>
                                        </div>
                                        <div className='col-71 CustomerStatus'>
                                            <span>Status</span>
                                        </div>
                                        <div className='col-71 CustomerDate'>
                                            <span>Created Date</span>
                                        </div>
                                        <div className='col-71 Actions'>
                                            <span>Actions</span>
                                        </div>
                                    </div>
                                    <CustomerCard/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-6 number py-2'>
                        <span>10 <img src={arrow2} className="ms-2"/></span>
                        </div>
                        <div className='col-6 d-flex align-items-center numbers justify-content-end px-5'>
                            <p className='fw-bolder me-3 mt-2 px-3'>Showing 1 to 10 of 430 entries</p>
                            <span className='me-3'><img src={arrow3} className="ms-2"/></span>
                            <span className='number1 me-3'>1</span>
                            <span className='numbers me-3'>2</span>
                            <span className='numbers me-3'>3</span>
                            <span className='numbers me-3'>...</span>
                            <span className='numbers me-3 px-3'>1337</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customerpage