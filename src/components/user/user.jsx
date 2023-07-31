import './user.css'
import { UserContent } from './userContent'
import { UserSummary } from './userSummary'

export const User = () => {
    return (
        <div className='user row'>
            <aside class="col-lg-4 col-md-5 pe-xl-4 mb-5">
                <UserSummary/>
            </aside>
            <div class="col-lg-8 col-md-7 mb-5">
                <UserContent/>
            </div>
        </div>
    )
}