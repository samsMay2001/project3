import './midSections.css'
import ad2 from '../../imgs/ad2Test1.png'
import ad3 from '../../imgs/ad3Test1.png'

export const MidSections = () => {
    return (
        <div className="mid-sections">
            <div>
                <div style={{width: '50%'}}>
                    <div className="mid-s1">
                        New Style for Lastest Collections
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <div className="mid-s2">
                        Discover our latest collection of shoes that are perfect for any occasion. 
                        From casual wear to formal attire. 
                        We have Everything you need to revamp your wardrobe and stay on trend. 
                    </div>
                </div>
            </div>
            <div style={{}}>
                <div className="mid-s3">
                    <div style={{border: '1px dashed white', overflow: 'hidden', paddingLeft:'30px', height: '100%', position: 'relative'}}>
                        <img className='ad2' src={ad2} alt='ad2'/>
                        <div className='mid-s5'>New Running Style</div>
                        <div className='mid-s6'>NOW AVAILABLE</div>
                        <button>Check Now</button>
                    </div>
                </div>
                <div className="mid-s4" >
                    <div  style={{border: '1px dashed white', overflow: 'hidden', height: '100%', position: 'relative'}}>
                        <img className='ad3' src={ad3} alt="ad3" />
                    </div>
                </div>
            </div>

        </div>
    )
}