import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const About1 = () => {
    return (
        <div className="about-section" id="about1">
            <div id="abt-side1">
                <h1>About Finder</h1>
                <div>
                We provide a complete service for the sale, purchase 
                or rental of real estate. We have been operating 
                more than 10 years. Search millions of apartments and 
                houses on Finder.
                </div>
                <button>Contact us</button>
            </div>
            <div id="abt-side2">
                <div>
                    <div><KeyboardArrowLeftIcon/></div>
                    <div><KeyboardArrowRightIcon/></div>
                </div>
            </div>
        </div>
    )
}