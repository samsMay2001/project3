export const About2Card = ({Icon, header, txt}) => {
    return (
        <div className="about2-card">
            <Icon className="about2-card-icon" size="current"/>
            <h1>{header}</h1>
            <div>{txt}</div>
        </div>
    )
}