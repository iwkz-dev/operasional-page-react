import CountUp from 'react-countup';
import { ContextIncomeInfo } from '../../services/IncomeInfo';
import { useContext } from 'react';
const CountUpNumber =({endval})=>{
    //console.log(endval)
return (
    <CountUp start={0} end={endval} delay={0}>
        {({ countUpRef }) => (
            <div>
                <span ref={countUpRef} />
            </div>
        )}
    </CountUp>
)
}

    export default CountUpNumber