export const Card = ({title, des, value, icon}) => {
    return (
        <div className="card">
                <div className="cardInner">
                    <h1 className="cardHeading">{title}</h1>
                    {icon}
                </div>
                
                <div>
                    <p className="cardValue">{value}</p>
                    <p className="cardSubHeading">{des}</p>
                </div>
                
            </div>
    )
}