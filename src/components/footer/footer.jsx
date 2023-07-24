import { NavLink } from 'react-router-dom'
import './footer.css'
import { Logo } from './logo'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FooterPost } from './footerPost';
import { PhoneApp } from './phoneApp';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
// import logo from '../imgs/Logo1.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-col">
                    <div className="footer-logo">
                        <Logo/>
                    </div>
                    <div className='footer-logo-link'>
                        <MailOutlineIcon style={{marginRight: '5px'}}/>
                        <NavLink to={''} className={'footer-link'}>example@gmail.com</NavLink>
                    </div>
                    <div className='footer-logo-link'>
                        <PhoneAndroidIcon style={{marginRight: '5px'}}/>
                        <NavLink to={''} className={'footer-link'}>438-426-2498</NavLink>
                    </div>
                    <div className='footer-logo-link'>
                        <div><FacebookIcon/></div>
                        <div><InstagramIcon/></div>
                        <div><TwitterIcon/></div>
                        <div><TelegramIcon/></div>
                    </div>
                </div>
                <div className="footer-col">
                    <h2>Quick Links</h2>
                    <NavLink to={''} className={'footer-link'}>Sell a property</NavLink>
                    <NavLink to={''} className={'footer-link'}>Rent a property</NavLink>
                    <NavLink to={''} className={'footer-link'}>Calculate your property</NavLink>
                    <NavLink to={''} className={'footer-link'}>Top offers</NavLink>
                    <NavLink to={''} className={'footer-link'}>Top cities</NavLink>
                </div>
                <div className="footer-col">
                    <h2>About</h2>
                    <NavLink to={''} className={'footer-link'}>About Us</NavLink>
                    <NavLink to={''} className={'footer-link'}>Our Agents</NavLink>
                    <NavLink to={''} className={'footer-link'}>Help & Support</NavLink>
                    <NavLink to={''} className={'footer-link'}>Contacts</NavLink>
                    <NavLink to={''} className={'footer-link'}>Top offers</NavLink>
                    <NavLink to={''} className={'footer-link'}>News</NavLink>
                </div>
                <div className="footer-col">
                    <h2>Recent Posts</h2>
                    <FooterPost 
                        postTitle={'HOME IMPROVEMENT'}
                        subTitle={'Your Guide to a Smart Apartement Searching'}
                        postTxt={
                            `Empower yourself with our comprehensive 
                            guide to smart apartment searching, and 
                            effortlessly find your dream home.`
                        }
                    />
                </div>
            </div>
            <div className="ios-app">
                <div className="ios-app-section">
                    <PhoneApp/>
                </div>
                <div className="ios-app-section">
                    <h2>Download Our App</h2>
                    <div>Find everything you need for buying, selling &
                        renting property in our new Finder App!
                    </div>
                </div>
                <div className="ios-app-section">
                    <div className='ios-app-sec1'>
                        <AppleIcon fontSize='large'/>
                    </div>
                    <div className='ios-app-sec2'>
                        {/* <GoogleIcon/> */}
                        Available on the
                    </div>
                    <div className='ios-app-sec3'>App Store</div>
                </div>
                <div className="ios-app-section">
                    <div className='ios-app-sec1'>
                        <GoogleIcon fontSize='large'/>
                        {/* <AppleIcon/> */}
                    </div>
                    <div className='ios-app-sec2'>
                        GET IT ON
                    </div>
                    <div className='ios-app-sec3'>Google Play</div>
                </div>
            </div>
        </div>
    )
}