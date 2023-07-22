import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
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
            const threshold = 100; // Adjust this value to set when the shadow appears
            setShowShadow(scrollPosition > threshold);
        })
        return (
            window.removeEventListener('scroll', ()=> {console.log('a')})
        )
    })
    return (
        <div className={`navbar ${showShadown && 'navbar-shadow'}`}>
            <NavLink className="nav-logo" to={"/"}> <h1>ELITLUX</h1></NavLink>
            <NavLink className={"nav-tab"} to={"/men"}>Men</NavLink>
            <NavLink className={"nav-tab"} to={"/women"}>Women</NavLink>
            <NavLink className={"nav-tab"} to={"/categories"}>Categories</NavLink>
            <NavLink className={"nav-tab"} to={"/brands"}>Brands</NavLink>
            
        </div>
    )
}