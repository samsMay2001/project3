import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import applogo from '../imgs/logo2.png'
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const navigate = useNavigate(); 
    const [showShadown, setShowShadow] = useState(false); 
    function handleCartClick () {
        navigate('/cart')
    }
    function handleUserClick(){
        navigate('/admin')
    }
    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            const scrollPosition = window.scrollY;
            const threshold = 10; // Adjust this value to set when the shadow appears
            setShowShadow(scrollPosition > threshold);
        })
        return (
            window.removeEventListener('scroll', ()=>{})
        )
    })
    return (
        <div className={`my-navbar ${showShadown && 'navbar-shadow'}`}>
            <div className="navbar1">
                <NavLink className="nav-logo" to={"/"}> <img style={{width: '150px'}} src={applogo} alt='logo'/></NavLink>
                <NavLink className={"nav-tab"} to={"/"}>Home</NavLink>
                <NavLink className={"nav-tab"} to={"/catalog"}>Catalog</NavLink>
                <NavLink className={"nav-tab"} to={"/account"}>Vendor</NavLink>
                <NavLink className={"nav-tab"} to={"/brands"}>About</NavLink>
                
                <div className="nav-right-area">
                    <div>
                        <div className="nav-right-btn">
                            <AccountCircleOutlinedIcon className='btn-icon'/>
                            <div>Sign In</div>
                        </div>
                        <div className="nav-right-btn">
                            <AddIcon className=''/>
                            <div>Add Property</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}