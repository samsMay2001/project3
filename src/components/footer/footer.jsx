import { NavLink } from 'react-router-dom'
import './footer.css'
import logo from '../imgs/Logo1.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <NavLink style={{textDecoration: 'none'}} to={'/'}>
                    <img src={logo} alt='logo' style={{marginLeft: '-22px'}} />
                </NavLink>
                <div className="footer-logo-txt">
                    Finding your fashion has never been easier. 
                    Browse the best selection of famous fashion brands that suit your style and preferences. 
                </div>
            </div>
            <div className="footer-section">
                <div className="footer-section-head">Menu</div>
                <div className="footer-section-content">
                    <div className="footer-link1">
                        <NavLink className={'footer-link'} to={'/men'}>Men</NavLink>
                        <NavLink className={'footer-link'} to={'/women'}>Women</NavLink>
                        <NavLink className={'footer-link'} to={'/tracking'}>Order Tracking</NavLink>
                    </div>
                    <div className="footer-link1">
                        <NavLink className={'footer-link'} to={'/faq'}>FAQ</NavLink>
                        <NavLink className={'footer-link'} to={'/privacy'}>Privacy</NavLink>
                        <NavLink className={'footer-link'} to={'/terms&conditions'}>Terms & Conditions</NavLink>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <div className="footer-section-head">Connect</div>
                <div className="footer-section-content">
                    <div className="footer-link1">
                        <NavLink className={'footer-link'} to={'/men'}>Contact Us</NavLink>
                        <NavLink className={'footer-link'} to={'/women'}>Instagram</NavLink>
                        <NavLink className={'footer-link'} to={'/tracking'}>Twitter</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}