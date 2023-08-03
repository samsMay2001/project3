import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import TimeToLeaveOutlinedIcon from '@mui/icons-material/TimeToLeaveOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
export const PropertyCard = () => {
    return (
        <div class="card card-hover card-horizontal border-0 shadow-sm mb-4 user-prp-cd" style={{cursor: 'pointer'}}>
            <div class="card-img-top position-relative user-prp-cd-1" >
                <div className={`product-img-background ${ true && 'product-img-active'}`} style={{padding: '14px'}}>
                    <div className='product-img-labels'>
                        { true &&<div className="product-img-label-green">Verified</div>}
                        { true &&<div className="product-img-label-red">Featured</div>}
                        { true &&<div className="product-img-label-blue">New</div>}
                    </div>
                    <div className={`product-fav ${true && 'product-fav-active'} user-prp-img-icon`}
                        style={true ? {width: '37px'}:{width: '40px'}}
                    >
                        <FavoriteIcon fontSize='small'/>
                    </div>
                </div>
            </div>
            <div class="card-body position-relative pb-3 user-prp-cd-2">
                <h4 class="mb-1 fs-xs fw-normal text-uppercase text-primary">For sale</h4>
                <h3 class="h6 mb-2 fs-base">3-bed Apartment | 67 sq.m</h3>
                <p class="mb-2 fs-sm text-muted">3811 Ditmars Blvd Astoria, NY 11105</p>
                <div class="fw-bold mb-2"><i class="fi-cash mt-n1 me-2 lead align-middle  opacity-70"><LocalAtmIcon className='cash-icon'/></i>$94,000</div>
                <div class="d-flex align-items-center justify-content-center justify-content-sm-start border-top pt-2 pb-2 mt-0 text-nowrap">
                    <span class="d-inline-block me-4 fs-sm">3
                        <i class="ms-1" ><BedOutlinedIcon style={{marginTop: '-3px'}} fontSize='small'/></i>
                    </span>
                    <span class="d-inline-block me-4 fs-sm">2
                        <i class="ms-1"><BathtubOutlinedIcon style={{marginTop: '-4px'}} fontSize='small'/></i>
                    </span>
                    <span class="d-inline-block fs-sm">2
                        <i class="ms-1"><TimeToLeaveOutlinedIcon style={{marginTop: '-3px'}} fontSize='small'/>    </i>
                    </span>
                </div>
            </div>
        </div>
    )
}