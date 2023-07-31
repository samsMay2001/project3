import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import applogo from '../imgs/logo2.png'
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import profImg from '../imgs/profile.jpg'

export const NavBar = () => {
    const navigate = useNavigate(); 
    const [showShadown, setShowShadow] = useState(false); 
    function handleCartClick () {
        navigate('/cart')
    }
    function handleUserClick(){
        navigate('/user')
    }
    function newProperty(){
        navigate('/newproperty')
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
                <NavLink className={"nav-tab"} to={"/listings"}>Listings</NavLink>
                <NavLink className={"nav-tab"} to={"/location"}>Location</NavLink>
                <NavLink className={"nav-tab"} to={"/about"}>About</NavLink>
                {/* <NavLink className={"nav-tab"} to={"/contact-us"}>Contact Us</NavLink> */}
                
                <div className="nav-right-area">
                    <div>
                        <div className='nav-right-btn' onClick={handleUserClick}>
                            <Avatar src={profImg} style={{width:'50px', height: '50px'}}/>
                        </div>
                        {/* <div className="nav-right-btn">
                            <AccountCircleOutlinedIcon className='btn-icon'/>
                            <div>Sign In</div>
                        </div> */}
                        <div className="nav-right-btn">
                            <AddIcon className=''/>
                            <div onClick={newProperty}>Add Property</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}