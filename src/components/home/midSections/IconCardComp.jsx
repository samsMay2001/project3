import { useState } from "react";

export const IconCard = ({Icon, Text}) => {
    const [activeIcon, setActiveIcon] = useState(false); 
    const handleMouseEnter = () => {
        setActiveIcon(true);
      };
    
      const handleMouseLeave = () => {
        setActiveIcon(false);
      };

    return(
        <div className="mid-section-card" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className={`card-icon ${ activeIcon && 'active-icon'}`}>
                <Icon />
            </div>
            <div>{Text}</div>
        </div>
    )
}

// indian jones