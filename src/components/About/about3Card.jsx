export const About3Card = ({number, header, txt}) => {
    return (
        <div className="about3-card">
            <div className="abt3-bullet">{number}</div>
            <div className="abt3-details">
                <h1>{header}</h1>
                <div>{txt}</div>
            </div>
        </div>
    )
}