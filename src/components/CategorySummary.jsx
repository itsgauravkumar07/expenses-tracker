export const CategorySummary = ({ categoryAmount }) => {
// ({ categoryAmount = {} }) → sets a default empty object if nothing is passed in.

    const entries = Object.entries(categoryAmount);

  if (entries.length === 0) {
    return <p>No category data available</p>;
  }

    return(
        <div className="mt-5">
            {entries.map(([category, total], index) => (
            <div key={index}
             className="innerCategorySummaryCardText"> 
              <span>{category}</span> 
              <span className="cardHeading">{"₹" + total}</span>
            </div>
        ))}
        </div>
       
    )
} 