import './about.css'
import { About1 } from './about1'
import { About2 } from './about2'
import { About3 } from './about3'
export const About = () => {
    return (
        <div className="about-page">
            <About1/>
            <About3/>
            <About2/>
        </div>
    )
}