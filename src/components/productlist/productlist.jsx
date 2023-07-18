import { useState } from 'react'
import { BottomSections } from '../home/bottomSections/bottomSections'
import { HomeProduct } from '../home/homeProduct/homeProduct'
import './productlist.css'
import { Pagination } from '@mui/material'

export const ProductList = () => {
    const [productList, setProductList] = useState(
        [
            '', 
            '', 
            '', 
            '', 
            '', 
            '', 
            '', 
            '',
            '',
            '',
            '',
            '',
        ])
    return (
        <div className='product-list'>
            {/* <div className="product-list-area"></div> */}
            <div className="bottom-head">Our Products</div>
            <div className="selection-tabs">
                <div className="selection-tab">Men</div>
                <div className="selection-tab">All</div>
                <div className="selection-tab">Sneaker</div>
                <div className="selection-tab">Sports</div>
                <div className="selection-tab">Formal</div>
                <div className="selection-tab">Slip-On</div>
                <div className="selection-tab">Filter</div>
            </div>
            <div className="home-productList1">
                {productList.map((item, index)=> (
                    <HomeProduct categories={true} key={index} brand={'Nike'} name={'Continental 80 Shoes'} description={null} price={113.83} colorScheme={['black']} />
                ))}
            </div>
            {/* <div className='all-categories'>See All Categories</div> */}
            <Pagination className='pagination' count={10} hidePrevButton hideNextButton />
        </div>
    )
}