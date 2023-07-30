import './home.css'
// import { MidSections } from './midSections/midSections'
// import { TopSections } from './topSections/topsections'
import {MidSections} from '../midSections/midSections'
import {TopSections} from '../topSections/topsections'

export const Home = () => {
    return (
        <div className='my-home'>
            <TopSections/>
            <MidSections/>
            {/* <BottomSections/> */}
        </div>
    )
}