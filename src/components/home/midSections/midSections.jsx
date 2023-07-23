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
import { useRef, useState } from 'react';
import { IconCard } from './IconCardComp';

export const MidSections = () => {
    const midRef = useRef()
    function triggleClick () {
        // const 
    }
    return (
        <div className="mid-section" ref={midRef}>
            <div className="mid-section-cards">
                <IconCard Icon={HouseIcon} Text={'Home'}/>
                <IconCard Icon={ApartmentIcon} Text={'Apartments'}/>
                <IconCard Icon={BusinessIcon} Text={'Commercial'}/>
                <IconCard Icon={MapsHomeWorkIcon} Text={'Dairly Rental'}/>
                <IconCard Icon={DomainAddIcon} Text={'New Buildings'}/>
                <IconCard Icon={MoreHorizIcon} Text={'More'}/>
            </div>
        </div>
    )
}