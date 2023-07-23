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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { StoreIcon } from './store';
import { useRef, useState } from 'react';
import { IconCard } from './IconCardComp';
import { HomeCard } from './houseCardComp';
import home1 from '../../imgs/home1.png'; 
import home2 from '../../imgs/home2.png'; 
import { ProductCard, TopOfferCard } from './topOfferCard';
import { MidSectionTopOffers } from './midSectionTopOffers';
import { PropertyCost } from './propertyCost';

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
            <div className="mid-section-home-cards">
                <HomeCard src={home1} 
                    hText={'Buy A Home'} 
                    pText={'Discover your dream home with our expert guidance and find the perfect property to call your own. Make your dreams come true!'} 
                    bText={'Find a home'}/>
                <HomeCard src={home2} 
                    hText={'Sell A Property'} 
                    pText={`Empower your real estate journey with our exceptional and personalized selling services, maximizing your property's true value.`} 
                    bText={'Place an ad'}/>
                <HomeCard src={home2} 
                    hText={'Rent A Property'} 
                    pText={`Discover the ideal rental property with our tailored selection and leasing services, ensuring a seamless experience.`} 
                    bText={'Find a rental'}/>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{fontWeight: '700', fontSize: '28px', marginBottom: '20px'}}>Top offers</div>
                <div style={{cursor:'pointer', color: 'GrayText',marginLeft:'auto', display: 'flex', justifyContent: 'right', alignItems:'center'}}>
                    <div style={{marginLeft: '10px'}}>View All</div>
                    <ArrowRightAltIcon/>
                </div>
            </div>
            <MidSectionTopOffers/>
            <PropertyCost/>
        </div>
    )
}