export const PropertyImages = () => {
    return (
        <section class="card card-body border-0 shadow-sm p-4 mb-4 add-prp-sec" id="photos" 
        style={{border: "1px dashed grey"}}
        >
              <h2 class="h4 mb-4"><i class="fi-image text-primary fs-5 mt-n1 me-2"></i>Photos / video</h2>
              <div class="alert alert-info mb-4" role="alert">
                <div class="d-flex"><i class="fi-alert-circle me-2 me-sm-3"></i>
                  <p class="fs-sm mb-1">The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br/>The maximum video size is 10 MB. Formats: mp4, mov.</p>
                </div>
              </div>
              <div class="filepond--root file-uploader file-uploader-grid filepond--hopper"
            //   style={{marginBottom: "50px"}}
              >
                <input class="filepond--browser" type="file" id="filepond--browser-f7ynv8s86" hidden={true} name="filepond" aria-controls="filepond--assistant-f7ynv8s86" aria-labelledby="filepond--drop-label-f7ynv8s86" accept="image/png,image/jpeg,video/mp4,video/mov" multiple=""/>
                {/* <a class="filepond--credits" aria-hidden="true" href="https://pqina.nl/" target="_blank" rel="noopener noreferrer" style={{transform:"translateY(152px);"}}>Powered by PQINA</a> */}
                <div class="filepond--drop-label" style={{transform: "translate3d(0px, 0px, 0px)", opacity: '1'}}>
                  <label for="filepond--browser-f7ynv8s86" id="filepond--drop-label-f7ynv8s86" aria-hidden="true">
                  <div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video
                </div>
              </label>
            </div>
            <div class="filepond--list-scroller" style={{transform: "translate3d(0px, 144px, 0px)"}}>
              <ul class="filepond--list" ></ul>
            </div>
            <div class="filepond--panel filepond--panel-root" data-scalable="true">
              <div class="filepond--panel-top filepond--panel-root"></div>
              <div class="filepond--panel-center filepond--panel-root" style={{transform: "translate3d(0px, 8px, 0px) scale3d(1, 1.44, 1);" }}></div>
              <div class="filepond--panel-bottom filepond--panel-root" style={{transform: "translate3d(0px, 152px, 0px)"}}></div>
            </div>
            <span class="filepond--assistant" id="filepond--assistant-f7ynv8s86" role="status" aria-live="polite" aria-relevant="additions">

            </span>
            <div class="filepond--drip"></div>
            <fieldset class="filepond--data"></fieldset>
            </div>
        </section>
    )
}