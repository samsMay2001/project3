import './topsections.css'
import promoImg from '../../imgs/ad1Test.png'
export const TopSections = () => {
    return (
        <div className="top-sections">
                <div className='top-section'>
                    <h1>
                        TRENDY SHOES TO LUXURY
                    </h1>
                    <p>
                        Finding your shoes has never been easier. Browse the best selection of famous fashion brands that suit your style and preference
                    </p>
                    <button>Check Now</button>
                    <div className='top-section-stickers'>
                        <div>
                            <h1>80+</h1>
                            <p>Unique Style</p>
                        </div>
                        <div>
                            <h1>25+</h1>
                            <p>Brand Trusted</p>
                        </div>
                    </div>
                    <div className='top-section-sticker1'>
                        <div className='blue'></div>
                        <div className='orange'></div>
                    </div>
                    <div style={{color: '#808080', fontSize:'13px', fontWeight:'500'}}>Best Shoes Discount <strong style={{color:'#2f2f2f'}}>30% OFF</strong> all Shoes!</div>
                </div>

                <div className='top-section'>
                    <img className='back-img' src={promoImg} alt='promoImg' />
                </div>
            </div>
    )
}