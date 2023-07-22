import './midSections.css'
import ad2 from '../../imgs/ad2Test1.png'
import ad3 from '../../imgs/ad3Test1.png'

import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import BusinessIcon from '@mui/icons-material/Business';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StoreIcon } from './store';

export const MidSections = () => {
    return (
        <div className="mid-section">
            <div className="mid-section-cards">
                <div className="mid-section-card">
                    <HouseIcon className='card-icon'/>
                    <div>Houses</div>
                </div>
                <div className="mid-section-card">
                    <ApartmentIcon className='card-icon'/>
                    <div>Apartments</div>
                </div>
                <div className="mid-section-card">
                    <BusinessIcon className='card-icon'/>
                    <div>Commercial</div>
                </div>
                <div className="mid-section-card">
                    <MapsHomeWorkIcon className='card-icon'/>
                    <div>Daily Rental</div>
                </div>
                <div className="mid-section-card">
                    <DomainAddIcon className='card-icon'/>
                    <div>New Buildings</div>
                </div>
                <div className="mid-section-card">
                    <MoreHorizIcon className='card-icon'/>
                    <div>More</div>
                </div>
            </div>
        </div>
    )
}