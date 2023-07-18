import './homeProduct.css'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';

export const HomeProduct = ({name, description, price, brand, colorScheme, categories}) => {
    return (
        <div className={`home-product ${categories && 'home-product1'}`}>
            <div className={`home-product-img ${categories && 'home-product-img1'}`}>
                <ShoppingBagRoundedIcon className="home-cart" />
            </div>
            <div className={`home-product-name ${categories && 'home-product-name1'}`}>{name}</div>
            <div className='home-product-brand'>{brand}</div>
            <div className='home-price-colors'>
                {colorScheme.map((item, index)=> (
                    <div key={index} className="home-color" style={{backgroundColor: `${item}`}}></div>
                ))}
                <div className={`home-price ${categories && 'home-price1'}`}>${price}</div>
            </div>
        </div>
    )
}