import { useState } from "react";

export const HomeCard = ({src, hText, pText, bText}) => {
    const [activeIcon, setActiveIcon] = useState(false); 
    const handleMouseEnter = () => {
        setActiveIcon(true);
        console.log('a')
      };
    
      const handleMouseLeave = () => {
        setActiveIcon(false);
      };
    return (
        <div className="home-card"  onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <img src={src} alt="a"/>
            <h5>{hText}</h5>
            <div>{pText}</div>
            <button className={`home-card-btn ${ activeIcon && 'active-home-card'}`}>{bText}</button>
        </div>
    )
}