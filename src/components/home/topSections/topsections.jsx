import './topsections.css'
import promoImg from '../../imgs/hero-image.jpg'
export const TopSections = () => {
    return (
        <div className="my-top-sections">
            <div className='my-top-section'>
                <h1>
                    Easy way to find a perfect property
                </h1>
                <p>
                    We provide provide a complete service for the sale, purchase or rental
                    of real estate. We have been operating more than 10 years. 
                    Search millions of apartements and house Finder
                </p>
                <button>See Listings</button>
                <div className='my-top-section-stickers'>
                    <div>
                        <h1>80+</h1>
                        <p>Unique Homes</p>
                    </div>
                    <div>
                        <h1>25+</h1>
                        <p>Locations</p>
                    </div>
                </div>
                <div className='my-top-section-sticker1'>
                    <div className='blue'></div>
                    <div className='orange'></div>
                </div>
                <div style={{color: '#808080', fontSize:'13px', fontWeight:'500'}}>Get up to <strong style={{color:'#2f2f2f'}}>5% OFF</strong></div>
            </div>

            <div className='my-top-section'>
                <img className='back-img' src={promoImg} alt='promoImg' />
            </div>
        </div>
    )
}