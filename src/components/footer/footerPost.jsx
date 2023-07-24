import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const FooterPost = ({postTitle, subTitle, postTxt}) => {
    return (
        <div className="footer-post">
            <div className="post-img"></div>
            <div className="post-content">
                <div className="post-label">{postTitle}</div>
                <div className="post-label">{subTitle}</div>
                <div className="post-label">
                    {postTxt}
                </div>
                <div className="post-label">
                    <div className="post-label-icon">
                        <CalendarMonthIcon/>
                        <div>Dec 4</div>
                    </div>
                    <div className="post-label-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.677" fill='currentColor' viewBox="0 0 20 17.677">
                            <path id="Union_3" data-name="Union 3" d="M-3338.452,820.486c-.226-.438.68-.8,1.595-1.941a6.837,6.837,0,0,1-2.34-5.044c0-4.143,4.029-7.5,9-7.5s9,3.357,9,7.5-4.03,7.5-9,7.5a10.588,10.588,0,0,1-3.207-.49,3.1,3.1,0,0,1-1.219.917,3.454,3.454,0,0,1-1.3.251A2.97,2.97,0,0,1-3338.452,820.486Z" transform="translate(3340.197 -805)" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <div>2 Comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}