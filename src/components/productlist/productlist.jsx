import { useState } from 'react'
import { BottomSections } from '../home/bottomSections/bottomSections'
import { HomeProduct } from '../home/homeProduct/homeProduct'
import Button from '@mui/material'
import './productlist.css'
import { Pagination } from '@mui/material'
import { ProductSideBar } from './sidebar'

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
            <ProductSideBar/>
            <div className="product-list-items">
                <Pagination className='pagination' count={10} hidePrevButton hideNextButton />
            </div>
        </div>
    )
}