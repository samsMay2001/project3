import { PropertyCard } from "./propertyCard"
import { Pagination } from '@mui/material'

export const PropertyCards = () => {
    return (
        <div className="property-cards">
            <div className="property-cards-content">
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
            </div>
            <div className="product-list-items">
                <Pagination className='pagination' count={10} hidePrevButton hideNextButton />
            </div>
        </div>
    )
}