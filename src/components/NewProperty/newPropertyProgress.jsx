import DoneIcon from '@mui/icons-material/Done';

export const PropertyFormProgress = () => {
    return (
        <div className="prp-progress">
        <aside class="">
            <div class="my-progress-bar">
              <h6 class="">65% content filled</h6>
              <div class="progress mb-4" style={{height: ".25rem"}}>
                <div class="progress-bar bg-warning" role="progressbar" style={{height: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center"><DoneIcon/><i class="fi-check text-primary me-2"></i>Basic info</li>
                <li class="d-flex align-items-center"><DoneIcon/><i class="fi-check text-primary me-2"></i>Location</li>
                <li class="d-flex align-items-center"><DoneIcon/><i class="fi-check text-primary me-2"></i>Property detials</li>
                <li class="d-flex align-items-center"><DoneIcon/><i class="fi-check text-primary me-2"></i>Price</li>
                <li class="d-flex align-items-center"><DoneIcon/><i class="fi-check text-primary me-2"></i>Photos / Video</li>
              </ul>
            </div>
          </aside>
        </div>
    )
}