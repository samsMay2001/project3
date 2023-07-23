import { ProductCard } from "./topOfferCard"

export const MidSectionTopOffers = () => {
    return (
        <div className="mid-section-top-offers">
                <ProductCard 
                    verified={true} 
                    // featured={true}
                    forSale={true}
                    location={'42 Broadway New York, NY, 10004'}
                    size={'Cottage | 120 sq.m'}
                    price={'$184,000'}
                    numBedRooms={4}
                    numBathRooms={2}
                    numParking={1}
                 />
                <ProductCard 
                    verified={true} 
                    newListing={true}
                    // featured={true}
                    // forSale={true}
                    location={'3811 Ditmars Blvd Astoria, NY11105'}
                    size={'3-bed Apartment | 67 sq.m'}
                    price={'$1,629'}
                    numBedRooms={3}
                    numBathRooms={2}
                    numParking={2}
                 />
                <ProductCard 
                    verified={true} 
                    featured={true}
                    forSale={true}
                    location={'67-04 Myrtle Ave Glendale, NY 11385'}
                    size={'Cottage | 120 sq.m'}
                    price={'$84,000'}
                    numBedRooms={4}
                    numBathRooms={2}
                    numParking={1}
                 />
                <ProductCard 
                    verified={true} 
                    // featured={true}
                    // forSale={true}
                    location={'1510 Castle Hill Ave Bronx, NY, 10464'}
                    size={'Greenpoint Rentals | 85 sq.m'}
                    price={'$1,330'}
                    numBedRooms={1}
                    numBathRooms={1}
                    numParking={1}
                 />
            </div>
    )
}