import './homeProduct.css'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

export const HomeProduct = ({name, description, price, brand, colorScheme}) => {
    return (
        <div className='home-product'>
            <div className="home-product-img">
                <ShoppingBagRoundedIcon className="home-cart" />
            </div>
            <div className='home-product-name'>{name}</div>
            <div className='home-product-brand'>{brand}</div>
            <div className='home-price-colors'>
                {colorScheme.map((item, index)=> (
                    <div key={index} className="home-color" style={{backgroundColor: `${item}`}}></div>
                ))}
                <div className="home-price">${price}</div>
            </div>
        </div>
    )
}