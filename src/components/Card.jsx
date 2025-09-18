export const Card = ({title, des, value, icon}) => {
    return (
        <div className="card">
                <div className="cardInner">
                    <h1 className="cardHeading">{title}</h1>
                    <span className="cardIcon">
                       {icon} 
                    </span>
                </div>
                
                <div>
                    <p className="cardValue">{value}</p>
                    <p className="cardSubHeading">{des}</p>
                </div>
                
            </div>
    )
}