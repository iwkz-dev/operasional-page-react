import { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ContextIncomeInfo } from "../../services/IncomeInfo";
import CountUpNumber from "../CountUpNumber/countUp";
import PieChart from "../PieCharts";
import ProgBar from "../PercentageBar";
const PercentageInfoConsumer = () => {
    const { mainIncome, percentageIncome } = useContext(ContextIncomeInfo)
 
    return (
        <Box>
            <CountUpNumber sx={{ variant: "h1", marginBottom: "1rem", textAlign: "center" }} endval={mainIncome}></CountUpNumber>
            <Typography sx={{ marginBottom: "1rem", textAlign: "start" }}>Persentasi Pemasukan</Typography>
            <ProgBar value={percentageIncome}></ProgBar>
        </Box>
    )
}
export default PercentageInfoConsumer