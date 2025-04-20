import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoredDb } from '../../Utilities/addToDb';

const BookDetails = () => {
    const {id}=useParams();
    const bookid=parseInt(id);
    const data = useLoaderData();
    const perBook=data.find(book=>book.bookId===bookid);
    const{bookName,image,category,publisher,review}=perBook
    const handleMarkAsRead=id=>{
      addStoredDb(id);
    }
    return (
        <div>
            <img className='w-[400px] h-[350px]' src={image} alt="" />
            <h1>{bookName}</h1>
            <h4>By: {publisher}</h4>
            <h3>{category}</h3>
            <h4>{review}</h4>
            <button onClick={()=>handleMarkAsRead(id)} className='btn btn-secondary m-3'>Mark As Read</button>
            <button className='btn btn-primary m-3'>Add To Wishlist</button>

        </div>
    );
};

export default BookDetails;