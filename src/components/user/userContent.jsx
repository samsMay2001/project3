import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { PropertyCards } from './propertyCards';

export const UserContent = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-between mb-4 pb-2">
                <h1 class="h2 mb-0" style={{fontWeight:'700'}}>Wishlist</h1>
                <span style={{cursor: 'pointer'}} class="fw-bold text-decoration-none clear-favorites" >
                    <i class="fi-x fs-xs mt-n1 me-2"><CloseRoundedIcon style={{marginTop:'-4px'}}/></i>Clear all
                </span>
            </div>
            <PropertyCards/>
        </div>
    )
}