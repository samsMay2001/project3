import { Pagination } from '@mui/material'
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ProductCard } from '../home/midSections/topOfferCard';
import { useState } from 'react';

export const Products = () => {
    const [prodcuts, setProducts] = useState([
        {
            verified:true,
            forsale:false,
            location: '3811 Ditmars Blvd Astora, NY 11105', 
            size : '3-Bed Aparetment | 67 sq.m', 
            price: '$1650', 
            numBedRooms : 3, 
            numBathRooms : 2, 
            numParking : 1, 
            new : true, 
            featured : false, 
            width : true
        }, 
        {
            verified:true,
            forsale:false,
            location: '3811 Ditmars Blvd Astora, NY 11105', 
            size : '3-Bed Aparetment | 67 sq.m', 
            price: '$1650', 
            numBedRooms : 3, 
            numBathRooms : 2, 
            numParking : 1, 
            new : true, 
            featured : false, 
            width : true
        }, 
        {
            verified:true,
            forsale:false,
            location: '3811 Ditmars Blvd Astora, NY 11105', 
            size : '3-Bed Aparetment | 67 sq.m', 
            price: '$1650', 
            numBedRooms : 3, 
            numBathRooms : 2, 
            numParking : 1, 
            new : true, 
            featured : false, 
            width : true
        }, 
    ])
    return (
        <div className="product-list-products">
            <h1>Products</h1>
            <div className="product-sort">
                <div className="sort-item"><ImportExportIcon/></div>
                <div className="sort-item">Sort by</div>
                <div className="sort-item">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Newest</option>
                        <option value="1">Popularity </option>
                        <option value="2">Low to High</option>
                        <option value="3">HigH to Low</option>
                        <option value="4">Queens</option>
                    </select>
                </div>
                <span className='sort-item'></span>
                <div className="sort-item"><CheckCircleOutlineIcon/></div>
                <div className="sort-item">148 results</div>
            </div>
            <div className='product-cards'>
                {prodcuts.map((item, index)=> (
                    <ProductCard 
                        verified={item.verified} 
                        forSale={item.forsale}
                        location={item.location}
                        size={item.size}
                        price={item.price}
                        numBedRooms={item.numBedRooms}
                        numBathRooms={item.numBathRooms}
                        numParking={item.numParking}
                        newListing = {item.new}
                        featured={ item.featured}
                        width={item.width}
                    />
                ))}
            </div>
            {/* <div></div> */}
            <div className="product-list-items">
                <Pagination className='pagination' count={10} hidePrevButton hideNextButton />
            </div>
        </div>
    )
}