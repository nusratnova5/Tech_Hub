import React from 'react';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <SingleProduct></SingleProduct>
        </div>
    </div>
    );
};

export default AllProducts;