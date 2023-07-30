import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const BasicInfo = () => {
    return (
            <section class="card card-body border-0 shadow-sm p-4 mb-4 add-prp-sec" id="basic-info">
                
                <h2 class="h4 mb-4"><i class="fi-info-circle fs-5 mt-n1 me-2" style={{color: "#FC5E3B"}}><InfoOutlinedIcon className=''/></i>Basic info</h2>
                <div class="mb-3">
                    <label class="form-label" for="ap-title">Title <span class="text-danger">*</span></label>
                    <input style={{marginBottom:'0px'}} class="form-control" type="text" id="ap-title" placeholder="Title for your property" value="Pine Apartments" required=""/><span class="form-text">48 characters left</span>
                </div>
                <div class="row">
                    <div class="col-sm-6 mb-3">
                    <label class="form-label" for="ap-category">Category <span class="text-danger">*</span></label>
                    <select class="form-select" id="ap-category" required="">
                        <option value="" disabled="" hidden="">Choose category</option>
                        <option value="Rent">For rent</option>
                        <option value="Sell">For sale</option>
                    </select>
                    </div>
                    <div class="col-sm-6 mb-3">
                    <label class="form-label" for="ap-type">Property type <span class="text-danger">*</span></label>
                    <select class="form-select" id="ap-type" required="">
                        <option value="" disabled="" hidden="">Choose property type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Commercial">Daily rental</option>
                        <option value="New building">New building</option>
                    </select>
                    </div>
                </div>
                <div class="form-label fw-bold pt-3 pb-2">Are you listing on Finder as part of a company?</div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="ap-company" name="ap-business-type"/>
                    <label class="form-check-label" for="ap-company">I am a registered business</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="ap-company" name="ap-business-type"/>
                    <label class="form-check-label" for="ap-company">I am a private seller</label>
                </div>
            </section>
    )
}