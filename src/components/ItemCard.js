import React from 'react'
const ItemCard = (props) => {
    return (
        <div className='item px-4 py-1 mt-2'>
                <img src={props.image} alt="Logo" className='' />
                <span className='gray font-400 align-items-center font-18 ms-3'>{props.itemTitle}</span>
        </div>
    )
}

export default ItemCard