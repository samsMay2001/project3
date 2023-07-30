import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
export const Location = () => {
    return (
        <section class="card card-body border-0 shadow-sm p-4 mb-4 add-prp-sec" id="location">
              <h2 class="h4 mb-4"><i class="fi-info-circle fs-5 mt-n1 me-2" style={{color: "#FC5E3B"}}><PlaceOutlinedIcon/></i>Location</h2>
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-country">Country / region <span class="text-danger">*</span></label>
                  <select class="form-select" id="ap-country" required="">
                    <option value="" disabled="">Choose country</option>
                    <option value="Australia">Australia</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="United States" selected="">United States</option>
                  </select>
                </div>
                <div class="col-sm-6 mb-3">
                  <label class="form-label" for="ap-city">City <span class="text-danger">*</span></label>
                  <select class="form-select" id="ap-city" required="">
                    <option value="" disabled="">Choose city</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York" selected="">New York</option>
                    <option value="San Diego">San Diego</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8 mb-3">
                  <label class="form-label" for="ap-district">District <span class="text-danger">*</span></label>
                  <select class="form-select" id="ap-district" required="">
                    <option value="" disabled="">Choose district</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Staten Island">Staten Island</option>
                    <option value="The Bronx">The Bronx</option>
                    <option value="Queens" selected="">Queens</option>
                  </select>
                </div>
                <div class="col-sm-4 mb-3">
                  <label class="form-label" for="ap-zip">Zip code  <span class="text-danger">*</span></label>
                  <input class="form-control" type="text" id="ap-zip" placeholder="Enter Zip code" value="67234" required="" />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="ap-address">Street address <span class="text-danger">*</span></label>
                <input class="form-control" type="text" id="ap-address" value="28 Jackson Avenue" required="" />
              </div>
            </section>
    )
}