import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos beatae laborum eos quisquam. Ullam blanditiis voluptas reprehenderit delectus placeat eligendi atque perspiciatis, amet optio iste veniam est rem alias?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ea ad sunt consectetur voluptatum? Fuga consequuntur cum suscipit aliquam reiciendis eius maiores perferendis nulla velit natus!</p>
        </div>
    </div>
  )
}

export default DescriptionBox