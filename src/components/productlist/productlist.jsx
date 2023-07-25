import { useState } from 'react'
import { BottomSections } from '../home/bottomSections/bottomSections'
import { HomeProduct } from '../home/homeProduct/homeProduct'
import Button from '@mui/material'
import './productlist.css'
import { ProductSideBar } from './sidebar'
import { Products } from './products'

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
            <Products/>
        </div>
    )
}