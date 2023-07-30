import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
export const PropertyDetails = () => {
    return (
            <section class="card card-body border-0 shadow-sm p-4 mb-4 add-prp-sec" id="details">
              <h2 class="h4 mb-4"><i class="fi-info-circle fs-5 mt-n1 me-2" style={{color: "#FC5E3B"}}><EditNoteOutlinedIcon/></i>Property details</h2>
              <div class="mb-4" style={{maxWidth:"25rem"}}>
                <label class="form-label" for="ap-area">Total area, sq.m</label>
                <input class="form-control" type="number" id="ap-area" min="20" placeholder="Enter your area" value="56" required=""/>
              </div>
                <label class="form-label d-block fw-bold mb-2 pb-1">Please fill:</label>
              <div className="row">
                <div class="col-sm-4">
                    <input class="form-control num-specifics" type="number" id="ap-area" min="20" placeholder="Number of bedrooms*" required=""/>
                </div>
                <div class="col-sm-4">
                    <input class="form-control num-specifics" type="number" id="ap-area" min="20" placeholder="Number of bathrooms*" required=""/>
                </div>
                <div class="col-sm-4">
                    <input class="form-control num-specifics" type="number" id="ap-area" min="20" placeholder="Parking spaces*" required=""/>
                </div>

              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Amenities</label>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="air-condition"/>
                      <label class="form-check-label" for="air-condition">Air conditioning</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="balcony"/>
                      <label class="form-check-label" for="balcony">Balcony</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="garage"/>
                      <label class="form-check-label" for="garage">Garage</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="wifi"/>
                      <label class="form-check-label" for="wifi">WiFi</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gym"/>
                      <label class="form-check-label" for="gym">Gym</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="free-parking"/>
                      <label class="form-check-label" for="free-parking">Free parking</label>
                    </div>
                    
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="pets-friendly"/>
                      <label class="form-check-label" for="pets-friendly">Pets-friendly</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="pool"/>
                      <label class="form-check-label" for="pool">Pool</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="bar"/>
                      <label class="form-check-label" for="bar">Bar</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="tv" checked=""/>
                      <label class="form-check-label" for="tv">TV</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="linens" checked=""/>
                      <label class="form-check-label" for="linens">Linens</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="heating" checked=""/>
                      <label class="form-check-label" for="heating">Heating</label>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="dishwasher"/>
                      <label class="form-check-label" for="dishwasher">Dishwasher</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="iron" checked=""/>
                      <label class="form-check-label" for="iron">Iron</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="hair-dryer" checked=""/>
                      <label class="form-check-label" for="hair-dryer">Hair dryer</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="kitchen" checked=""/>
                      <label class="form-check-label" for="kitchen">Kitchen</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="breakfast"/>
                      <label class="form-check-label" for="breakfast">Breakfast</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="security-cameras"/>
                      <label class="form-check-label" for="security-cameras">Security cameras</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label d-block fw-bold mb-2 pb-1">Pets</label>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="allow-cats"/>
                      <label class="form-check-label" for="allow-cats">Cats allowed</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="allow-dogs"/>
                      <label class="form-check-label" for="allow-dogs">Dogs allowed</label>
                    </div>
                  </div>
                </div>
              </div>
              <label class="form-label" for="ap-description">Description </label>
              <textarea style={{marginBottom:'0px'}} class="form-control" id="ap-description" rows="5" placeholder="Describe your property"></textarea><small class="form-text">1500 characters left</small>
            </section>
    )
}