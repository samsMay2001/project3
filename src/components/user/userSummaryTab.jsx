export const UserSummaryTab = ({Icon, txt}) => {
    return (
            <div class="card-nav-link d-flex align-items-center" >
                <i class="fi-user opacity-60 me-2"><Icon fontSize="small"/></i>{txt}
            </div>
    )
}