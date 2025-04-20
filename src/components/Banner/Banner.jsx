import React from 'react';
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-between items-center p-10'>
            <div>
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <button className='btn btn-primary'>list</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;