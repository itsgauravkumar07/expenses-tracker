export const Card = ({title, des, value, icon}) => {
    return (
        <div className="card">
                <div className="cardInner">
                    <h1>{title}</h1>
                    {icon}
                </div>
                
                <div>
                    <p>{value}</p>
                    <p>{des}</p>
                </div>
                
            </div>
    )
}