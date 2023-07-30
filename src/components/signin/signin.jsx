import './signin.css'
import signin from '../imgs/signup.png'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';

export const SignIn = () => {
    return (
        <div className="sign-in">
            <div className="sign-in-comp">
                <div className="sign-section">
                    <h1>Hey there!<br/> Welcom back</h1>
                    <img src={signin} alt="" />
                    <div>Demo email: <span>demo@gmail.com</span></div>
                    <div>Demo password: <span>123@demo</span></div>
                </div>
                <div className="sign-section">
                    <div className='sign-icon'><CloseIcon/></div>
                    <Button startIcon={<GoogleIcon/>}>Sign in with Google</Button>
                    <Button startIcon={<FacebookIcon/>} style={{marginBottom: '40px'}}>Sign in with Facebook</Button>
                    <div className='sign-divider'>
                        <span></span> or <span></span>
                    </div>
                    <div style={{marginBottom:'7px'}}>Email address</div>
                    <input type="text" name="" id="" className='form-control' placeholder='Your name*' />
                    <div style={{marginBottom:'7px'}}>Password</div>
                    <input style={{height: '45px', marginBottom: '20px'}} type="password" name="" id="" className='form-control' placeholder='Password*' />
                    <input type="button" name="" id="" value={"Sign In"}/>
                </div>
            </div>
        </div>
    )
}