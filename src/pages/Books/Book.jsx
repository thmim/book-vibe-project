// import React, { Suspense, useEffect, useState } from 'react';
import { Suspense } from 'react';
import SingleBook from '../../components/SingleBook/SingleBook';


const Book = ({data}) => {
    
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-center p-6'>Books</h2>
            <Suspense fallback={<span>Loading.....</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                data.map((oneBook)=><SingleBook key={oneBook.bookId} oneBook={oneBook}></SingleBook>)
            }
           </div>
            </Suspense>
        </div>
    );
};

export default Book;