import { BasicInfo } from './basic-info'
import { Location } from './location'
import './newProperty.css'
import { PropertyFormProgress } from './newPropertyProgress'
import { PropertyDetails } from './property-details'
import { PropertyImages } from './propertyImage'
import { PropertyPrice } from './propertyPrice'
import StickyBox from 'react-sticky-box'

export const NewProperty = () => {
    return (
        <div className="new-property">
            <h1>Add Property</h1>
            <div className="new-property-content">
                <div className="new-pro-side">
                    <BasicInfo/>
                    <Location/>
                    <PropertyDetails/>
                    <PropertyPrice/>
                    <PropertyImages/>
                    <button>Save and continue</button>
                </div>
                <div className="new-pro-side">
                    <StickyBox offsetTop={80} offsetBottom={50}>
                        <PropertyFormProgress/>
                    </StickyBox>
                </div>
            </div>
        </div>
    )
}