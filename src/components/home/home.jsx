import { BottomSections } from './bottomSections/bottomSections'
import './home.css'
import { MidSections } from './midSections/midSections'
import { TopSections } from './topSections/topsections'

export const Home = () => {
    return (
        <div className='home'>
            <TopSections/>
            <MidSections/>
            <BottomSections/>
        </div>
    )
}