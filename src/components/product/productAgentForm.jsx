import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Rating from '@mui/material/Rating';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import profile from '../imgs/profile.jpg'
export const ProductAgentForm = () => {
    return (
        
        <div className="productView-desc-side-label">
            <div className='productView-side-label-header'>
                <div className='prod-vw-sd-lb-h'>
                    <FacebookIcon fontSize='small'/>
                </div>
                <div className='prod-vw-sd-lb-h'>
                    <LinkedInIcon fontSize='small'/>
                </div>
                <Avatar src={profile} style={{marginRight: 'auto', height: '50px', width: '50px'}}/>
            </div>
            <h3>Floyd Miles</h3>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Rating style={{}}  name="read-only" value={5} readOnly size='small'/>
                <span>(45 reviews)</span>
            </div>
            <div style={{fontWeight: 400, fontSize: '17px', color: '#656565', marginBottom: '15px'}}>Imperial Property Group Agent</div>
            <div className='agent-contacts'>
                <WifiCalling3Icon style={{marginRight: '5px'}} fontSize='small'/>
                <div>(302) 555-0107</div>
            </div>
            <div  className='agent-contacts' style={{marginBottom: '20px'}}>
                <MailOutlineIcon style={{marginRight:'5px'}} fontSize='small'/>
                <div>floyd_miles@gmail.com</div>
            </div>
            <div style={{backgroundColor: '#e5e5e5', marginBottom: '25px', height: '1px'}}></div>
            <input type="text" name="" id="" className='form-control' placeholder='Your name*' />
            <input type="text" name="" id="" className='form-control' placeholder='Email*' />
            <input type="text" name="" id="" className='form-control' placeholder='Phone*' />
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write a message*'></textarea>
            <div style={{display: 'flex', alignContent: 'center'}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label label1" for="flexCheckDefault">
                    {'Send news, tips and promos from Finder to my email.'}
                </label>
            </div>
            <div className='agent-send-btn'>Send Request</div>
        </div>
        
    )
}