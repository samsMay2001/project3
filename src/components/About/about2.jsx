import { About2Card } from "./about2Card"
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
export const About2 = () => {
    return (
        <div id="about2" className="about-section">
            <h1>Why choose us? </h1>
            <div id="about2-cards">
                <About2Card 
                    Icon={VerifiedUserOutlinedIcon}
                    header={'Safety is our priority'} 
                    txt={'Safety is our priority. We meticulously select secure properties in established neighborhoods, conducting thorough assessments.'}
                    />
                <About2Card 
                    Icon={AttachMoneyOutlinedIcon}
                    header={'Fair Price'} 
                    txt={`Fair Price, Our Promise. At Finder, we 
                    are dedicated to offering you properties at honest and competitive 
                    prices. `}
                    />
                <About2Card 
                    Icon={HeadsetMicIcon}
                    header={'Support 24/7'} 
                    txt={`
                    Support 24/7, Your Comfort Matters. At Finder, we prioritize your satisfaction and convenience. `}
                    />
            </div>
        </div>
    )
}