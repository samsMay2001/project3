import { useState } from 'react'
import { HomeProduct } from '../homeProduct/homeProduct'
import './bottomSections.css'

export const BottomSections = ({categories}) => {
    const [productList, setProductList] = useState(['', '', ''])
    return (
        <div className="bottom-section">
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
            <div className="home-productList">
                {productList.map((item, index)=> (
                    <HomeProduct key={index} brand={'Nike'} name={'Continental 80 Shoes'} description={null} price={113.83} colorScheme={['black']} />
                ))}
            </div>
            <div className='all-categories'>See All Categories</div>
        </div>
    )
}