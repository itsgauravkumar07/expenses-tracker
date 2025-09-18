
export const Filter = ({value, onChange}) => {

    return(
            <select
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                className="expenseFilter"
                >

                <option value="all">All</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="bill">Bills</option>

            </select>
    );
}