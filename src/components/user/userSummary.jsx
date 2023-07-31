import Avatar from '@mui/material/Avatar';
import avatarImg from '../imgs/profile.jpg'
import Rating from '@mui/material/Rating';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { UserSummaryTab } from './userSummaryTab';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChaletRoundedIcon from '@mui/icons-material/ChaletRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const UserSummary = () => {
    return (
        <div class="card card-body border-0 shadow-sm pb-1 me-lg-1 add-prp-sec" style={{marginLeft:"0px",borderRadius:'10px', padding: '30px'}}>
            <div class="d-flex d-md-block d-lg-flex align-items-start pt-lg-2 mb-4">
                <Avatar style={{width: '55px', height: '55px', marginRight: '15px'}} src={avatarImg} />
                <div class="user-summary-heading">
                    <h2 class="" >Floyd Miles</h2>
                    <span class="star-rating">
                        <Rating style={{marginBottom: '10px'}}  name="read-only" value={5} readOnly size='small'/>
                    </span>
                    <ul class="list-unstyled fs-sm mt-3 mb-0">
                        <li><div class="nav-link fw-normal p-0"><i class="fi-phone opacity-60 me-2"><RingVolumeIcon className='user-summary-icon'/></i>(302) 555-0107</div></li>
                        <li><div class="nav-link fw-normal p-0"><i class="fi-mail opacity-60 me-2"><MailOutlinedIcon className='user-summary-icon'/></i>annette_black@email.com</div></li>
                    </ul>
                </div>
            </div>
            <Button className='user-summary-btn' startIcon={<AddOutlinedIcon/>}>Add a property</Button>
            <div class="btn btn-outline-secondary d-block d-md-none w-100 mb-3" href="https://finder.createx.studio/real-estate-account-wishlist.html#account-nav" data-bs-toggle="collapse"><i class="fi-align-justify me-2"></i>Menu</div>
                <div class="collapse d-md-block mt-3" id="account-nav">
                    <div class="card-nav">
                        <UserSummaryTab Icon={PersonOutlinedIcon} txt={'Persnal Info'} />
                        <UserSummaryTab Icon={LockOutlinedIcon} txt={'Password & Security'} />
                        <UserSummaryTab Icon={ChaletRoundedIcon} txt={'My Properties'} />
                        <UserSummaryTab Icon={FavoriteBorderRoundedIcon} txt={'Wishlist'} />
                        <UserSummaryTab Icon={StarOutlineRoundedIcon} txt={'Reviews'} />
                        <UserSummaryTab Icon={NotificationsNoneRoundedIcon} txt={'Notification'} />
                        <UserSummaryTab Icon={HelpOutlineRoundedIcon} txt={'Help'} />
                        <UserSummaryTab Icon={LogoutRoundedIcon} txt={'Sign Out'} />
                    </div>
                </div>
        </div>
    )
}