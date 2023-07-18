import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { ContextIncomeInfo } from "../../services/IncomeInfo";
import CountUpNumber from "../CountUpNumber/countUp";
import PieChart from "../PieCharts";

const BillInfoConsumer = () => {
    const { bill, totalBillByType } = useContext(ContextIncomeInfo)

    return (
        <Box>
            <CountUpNumber endval={bill}></CountUpNumber>
            <PieChart data={totalBillByType}></PieChart>  {/**Replace with totalBillType */}
        </Box>
    )
}
export default BillInfoConsumer