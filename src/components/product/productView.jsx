import './productView.css'
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import MinorCrashOutlinedIcon from '@mui/icons-material/MinorCrashOutlined';
import { ProductViewLabel } from './productViewLabel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { ProductViewGrid } from './productViewGrid';

export const ProductView = () => {
    return (
        <div className="productView">
            <h1>Pine Apartments</h1>
            <h4>28 Jackson Ave Long Island City, NY 67234</h4>
            <div className='productView-labels'>
                <ProductViewLabel txt={4} Icon={KingBedOutlinedIcon}/>
                <ProductViewLabel txt={2} Icon={BathtubOutlinedIcon}/>
                <ProductViewLabel txt={2} Icon={MinorCrashOutlinedIcon}/>
            </div>
            <div className="productView-labels">
                <div>
                    <div><FavoriteBorderOutlinedIcon fontSize='small'/></div>
                    <div><ShareOutlinedIcon fontSize='small'/></div>
                </div>
            </div>
            <ProductViewGrid/>
        </div>
    )
}