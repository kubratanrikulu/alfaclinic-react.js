import React from 'react'
import person1 from '../img/person1.svg'
import person2 from '../img/person-2.svg'
import person3 from '../img/person-3.svg'
import arrow from '../img/arrow.svg'
const CustomerCard = (props) => {
   const persons = [
        {
            "id":1,
            "customerName": "Jhon Clavio" ,
            "gender": "Male",
            "image":  person1,
            "phoneNumber" : "+1-410-555-0112",
            "country": "Bahrain",
            "status": "Continues",
            "createdDate": "02,05,22",
            "actions": "Actions"
        },
        {
            "id":2,
            "customerName": "Alex Smith" ,
            "gender": "Male",
            "image":  person2,
            "phoneNumber" : "+1-202-555-0199",
            "country": "Canada",
            "status": "Continues",
            "createdDate": "04.05.2022",
            "actions": "Actions"
        },
        {
            "id":3,
            "customerName": "Jane Coper" ,
            "gender": "Female",
            "image":  person3,
            "phoneNumber" : "+1-614-555-0111",
            "country": "Indıa",
            "status": "Completed",
            "createdDate": "03.03.2022",
            "actions": "Actions"
        },
        {
            "id":4,
            "customerName": "Jhon Clavio" ,
            "gender": "Male",
            "image":  person1,
            "phoneNumber" : "+1-410-555-0112",
            "country": "Bahrain",
            "status": "Completed",
            "createdDate": "02,05,22",
            "actions": "Actions"
        },
        {
            "id":5,
            "customerName": "Alex Smith" ,
            "gender": "Male",
            "image":  person2,
            "phoneNumber" : "+1-202-555-0199",
            "country": "Canada",
            "status": "Completed",
            "createdDate": "04.05.2022",
            "actions": "Actions"
        },
        {
            "id":6,
            "customerName": "Jane Coper" ,
            "gender": "Female",
            "image":  person3,
            "phoneNumber" : "+1-614-555-0111",
            "country": "Indıa",
            "status": "Continues",
            "createdDate": "03.03.2022",
            "actions": "Actions"
        },
        {
            "id":7,
            "customerName": "Jhon Clavio" ,
            "gender": "Male",
            "image":  person1,
            "phoneNumber" : "+1-410-555-0112",
            "country": "Bahrain",
            "status": "Completed",
            "createdDate": "02,05,22",
            "actions": "Actions"
        },
        {
            "id":8,
            "customerName": "Alex Smith" ,
            "gender": "Male",
            "image":  person2,
            "phoneNumber" : "+1-202-555-0199",
            "country": "Canada",
            "status": "Completed",
            "createdDate": "04.05.2022",
            "actions": "Actions"
        },
        {
            "id":9,
            "customerName": "Jane Coper" ,
            "gender": "Female",
            "image":  person3,
            "phoneNumber" : "+1-614-555-0111",
            "country": "Indıa",
            "status": "Continues",
            "createdDate": "03.03.2022",
            "actions": "Actions"
        },
        {
            "id":10,
            "customerName": "Jhon Clavio" ,
            "gender": "Male",
            "image":  person1,
            "phoneNumber" : "+1-410-555-0112",
            "country": "Bahrain",
            "status": "Continues",
            "createdDate": "02,05,22",
            "actions": "Actions"
        },,
        {
            "id":9,
            "customerName": "Jane Coper" ,
            "gender": "Female",
            "image":  person3,
            "phoneNumber" : "+1-614-555-0111",
            "country": "Indıa",
            "status": "Continues",
            "createdDate": "03.03.2022",
            "actions": "Actions"
        },
      ]
    return (
        <div className='customerCard p-0 bg-white'>
            {persons.map((person) =>(
                <div className='row d-flex justify-content-around align-items-center mt-3 mb-5' key={person.id}>
                    <div classname="col-71 form-check" style={{'width': 'calc(100% / 7)', 'display':'flex', 'justifyContent': 'center'}}>
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     </div>
                    <div className='col-71 cart d-flex align-items-center'>
                        <div className='item-card me-3'>
                            <img src={person.image} />
                        </div>
                        <div className='name-card'>
                            <p>{person.customerName}</p>
                            <p>{person.gender}</p>
                        </div>
                    </div>
                    <div className='col-71 number'>
                        <p>{person.phoneNumber}</p>
                    </div>
                    <div className='col-71 country'>
                        <p>{person.country}</p>
                    </div>
                    <div className='col-71 status'>
                        <span className='status'>{person.status}</span>
                    </div>
                    <div className='col-71 date'>
                        <p>{person.createdDate}</p>
                    </div>
                    <div className='col-71 actions'>
                    <span>{person.actions} <img src={arrow} className="ms-2"/></span>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CustomerCard