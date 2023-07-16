import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

export const NavBar = () => {
    const navigate = useNavigate(); 
    function handleCartClick () {
        navigate('/cart')
    }
    function handleUserClick(){
        navigate('/admin')
    }
    return (
        <div className='navbar'>
            <NavLink className="nav-logo" to={"/"}> <h1>ELITLUX</h1></NavLink>
            <NavLink className={"nav-tab"} to={"/men"}>Men</NavLink>
            <NavLink className={"nav-tab"} to={"/women"}>Women</NavLink>
            <NavLink className={"nav-tab"} to={"/categories"}>Categories</NavLink>
            <NavLink className={"nav-tab"} to={"/brands"}>Brands</NavLink>
            <div className="nav-search-area">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd" stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(2 2)">
                        <circle cx="9.767" cy="9.767" r="8.989"/>
                        <line x1="16.018" x2="19.542" y1="16.485" y2="20"/></g>
                    </svg>
                </div>
                <input type="text" placeholder="Search..." name="" id="" spellCheck={false}/>
            </div>
            <div className='nav-cart' onClick={handleCartClick}>
                <ShoppingBagRoundedIcon className='nav-cart'/>
            </div>
            <div className='nav-admin'>
                    <svg onClick={handleUserClick} className='nav-administrator' color='grey' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="#424242" fill-rule="nonzero" d="M11.5,8 C12.3284271,8 13,8.67157288 13,9.5 L13,10 C13,11.9714437 11.14049,14 8,14 C4.85950997,14 3,11.9714437 3,10 L3,9.5 C3,8.67157288 3.67157288,8 4.5,8 L11.5,8 Z M8,1.5 C9.51878306,1.5 10.75,2.73121694 10.75,4.25 C10.75,5.76878306 9.51878306,7 8,7 C6.48121694,7 5.25,5.76878306 5.25,4.25 C5.25,2.73121694 6.48121694,1.5 8,1.5 Z"/></svg>
                {/* <NavLink className={'nav-administrator'} to={'/admin'}>Admin</NavLink>
                <NavLink className={'nav-user'} to={'/user'}>User</NavLink> */}
            </div>
        </div>
    )
}