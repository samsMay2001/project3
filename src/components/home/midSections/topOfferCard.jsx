import PaymentsIcon from '@mui/icons-material/Payments';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
export const TopOfferCard = () => {
    const [activeIcon, setActiveIcon] = useState(false); 
    const handleMouseEnter = () => {
        setActiveIcon(true);
      };
    
      const handleMouseLeave = () => {
        setActiveIcon(false);
      };
    return (
        <div className="product-card" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className="product-img">
                <div className={`product-img-background ${ activeIcon && 'product-img-active'}`}>
                    <div className='product-img-labels'>
                        <div className="product-img-label-green">Verified</div>
                        <div className="product-img-label-red">Featured</div>
                        <div className="product-img-label-blue">New</div>
                    </div>
                    <div className={`product-fav ${activeIcon && 'product-fav-active'}`}>
                        <FavoriteBorderOutlinedIcon fontSize='small'/>
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '20px', paddingRight:'20px'}}>
                <div className="card-label" >FOR SALE</div>
                <div className={`card-label ${activeIcon && 'card-label-active'}`}>Cottage | 120 sq.m</div>
                <div className="card-label">42 Broadway New York, NY, 10004</div>
                <div className="card-label">
                    <PaymentsIcon/>
                    <div>$184,000</div>
                </div>
                <div className="card-label">
                    <div>
                        <div>
                            <div>4</div>
                            <BedOutlinedIcon fontSize='small'/>
                        </div>
                        <div>
                            <div>2</div>
                            <BathtubOutlinedIcon fontSize='small'/>
                        </div>
                        <div>
                            <div>1</div>
                            <TimeToLeaveOutlinedIcon fontSize='small'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}