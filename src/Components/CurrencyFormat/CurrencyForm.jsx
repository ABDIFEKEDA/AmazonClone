import react from 'react';
import numeral from 'numeral';
const CurrencyFOrmat = ({amount})=>{
    const FormattedAmount = numeral(amount).format("$0,0.00");
    return <div>{FormattedAmount} </div>
}
export default CurrencyFOrmat;