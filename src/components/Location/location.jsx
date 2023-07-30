import './location.css'

import { LocationFilter } from './locationFilter';

export const Location = () => {
    return (
        <div className="location">
            <div className="location-map-grid">
                <LocationFilter/>
            </div>
        </div>
    )
}