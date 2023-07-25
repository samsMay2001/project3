import './productlist.css'
import { ProductSideBar } from './sidebar'
import { Products } from './products'

export const ProductList = () => {
    return (
        <div className='product-list'>
            <ProductSideBar/>
            <Products/>
        </div>
    )
}