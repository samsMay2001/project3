import PaymentsIcon from '@mui/icons-material/Payments';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export const ProductCard = ({width, verified, featured, newListing, forSale, location, size, price, numBedRooms, numBathRooms, numParking}) => {
    const [activeIcon, setActiveIcon] = useState(false); 
    const handleMouseEnter = () => {
        setActiveIcon(true);
    };
    const navigate = useNavigate(); 
    function handleClick(){
        navigate('/catalog/product')
    }
    
    // const width = 330;   
    const handleMouseLeave = () => {
    setActiveIcon(false);
    };
    return (
        <div className="product-card" onClick={handleClick}
        style={width ? {width: `${320}px`, height: '370px'} : {width: '295px', height: '415px'}}
        onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className="product-img"
                style={width ? {height: '160px'}: {height: '210px'}}
            >
                <div className={`product-img-background ${ activeIcon && 'product-img-active'}`}>
                    <div className='product-img-labels'>
                        { verified &&<div className="product-img-label-green">Verified</div>}
                        { featured &&<div className="product-img-label-red">Featured</div>}
                        { newListing &&<div className="product-img-label-blue">New</div>}
                    </div>
                    <div className={`product-fav ${activeIcon && 'product-fav-active'}`}
                        style={width ? {width: '37px'}:{width: '40px'}}
                    >
                        <FavoriteBorderOutlinedIcon fontSize='small'/>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '20px', paddingRight:'20px'}}>
                <div className="card-label" >{forSale ? 'FOR SALE' : 'FOR RENT'}</div>
                <div className={`card-label ${activeIcon && 'card-label-active'}`}>{size}</div>
                <div className="card-label">{location}</div>
                <div className="card-label">
                    <PaymentsIcon/>
                    <div>{price}</div>
                </div>
                <div className="card-label">
                    <div>
                        <div>
                            <div>{numBedRooms}</div>
                            <BedOutlinedIcon fontSize='small'/>
                        </div>
                        <div>
                            <div>{numBathRooms}</div>
                            <BathtubOutlinedIcon fontSize='small'/>
                        </div>
                        <div>
                            <div>{numParking}</div>
                            <TimeToLeaveOutlinedIcon fontSize='small'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}