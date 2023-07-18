import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { ContextIncomeInfo } from "../../services/IncomeInfo";
import CountUpNumber from "../CountUpNumber/countUp";
import PieChart from "../PieCharts";

const IncomeInfoConsumer = () => {
    const { income, totalIncomeByType } = useContext(ContextIncomeInfo)

    return (
        <Box>
            <CountUpNumber endval={income}></CountUpNumber>
            <PieChart data={totalIncomeByType}></PieChart> {/**Replace with totalIncomeType */}
        </Box>
    )
}
export default IncomeInfoConsumer