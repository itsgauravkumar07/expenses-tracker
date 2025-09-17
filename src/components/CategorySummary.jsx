export const CategorySummary = ({ categoryAmount }) => {
// ({ categoryAmount = {} }) → sets a default empty object if nothing is passed in.

    const entries = Object.entries(categoryAmount);

  if (entries.length === 0) {
    return <p>No category data available</p>;
  }

    return(
        <div>
            {entries.map(([category, total], index) => (
            <li key={index}>
            {category} - {total}
            </li>
        ))}
        </div>
       
    )
} 