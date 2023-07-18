import { useState, createContext, useEffect, useContext } from 'react';
import { getIncomeData, getIncomePercentage, getBillData } from '../DataService/index.jsx';
//import PieChart from './pieChart.js';
import CountUpNumber from '../../components/CountUpNumber/countUp.jsx';
import { currentMonthNumber, currentYear } from '../DateService/index.jsx';
import DefaultCharts from '../../utils/defaulCharts.jsx';

export const ContextIncomeInfo = createContext()
export default function IncomeInfoProvider({ children }) {
    const [mainIncome, updateMainIncome] = useState(4999)
    const [income, updateIncome] = useState(4999)
    const [totalIncomeByType, updateTotalIncomeByType] = useState(DefaultCharts)
    const [bill, updateBill] = useState(4999)
    const [totalBillByType, updateTotalBillByType] = useState(DefaultCharts)
    const [percentageIncome, updatePercentageIncome]= useState(100)
    useEffect(() => {
        initMainIncomeAndPercentage()
        initTotalIncome()
        initTotalBill() 
    }, [])// Run only once Rest API

    function initTotalIncome() {
        getIncomeData(currentMonthNumber, currentYear)
            .then(({ data: { data } }) => {
                console.log(data[0])
                updateTotalIncomeData(data[0]);
            });
    }
    function initTotalBill() {
        getBillData(currentMonthNumber, currentYear)
            .then(({ data: { data } }) => {
                updateTotalBillData(data[0])
            })
    }
    function initMainIncomeAndPercentage() {
        getIncomePercentage(currentMonthNumber, currentYear)
            .then(({ data: { data } }) => {
                console.log(data[0])
                updateMainIncomeData(data[0]);
            });
    }
    //Update Function
    function updateMainIncomeData({totalIncome, incomePercentage}) {
        //Update total income above the percentage income
        updateMainIncome(totalIncome)
        updatePercentageIncome(incomePercentage)
    }

    function updateTotalIncomeData({ totalIncomes, totalIncomeByTypes }) { 
        //counter in income tab and chart in 
        updateIncome(totalIncomes)
        updateTotalIncomeByType(extractTotalWithEachType(totalIncomeByTypes))
    }

    function updateTotalBillData({ totalBills, totalBillByTypes }) {
        //counter in outcome and chart
        updateBill(totalBills)
        updateTotalBillByType(extractTotalWithEachType(totalBillByTypes))
    }

    function extractTotalWithEachType(totalIncomeByTypes) {
        const keys = Object.keys(totalIncomeByTypes);
        return keys.map((key) => ({
            y: totalIncomeByTypes[key],
            label: key,
        }));
    }
    return (
        <ContextIncomeInfo.Provider value={{
            mainIncome, income, totalIncomeByType, bill, totalBillByType, percentageIncome,
            updateMainIncomeData, updateTotalIncomeData, updateTotalBillData
        }}>
            {children}
        </ContextIncomeInfo.Provider>
    )
}