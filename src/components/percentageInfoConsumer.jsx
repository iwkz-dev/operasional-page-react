import { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { ContextIncomeInfo } from "../services/IncomeInfo";
import CountUpNumber from "./CountUpNumber/countUp";
import PieChart from "./PieCharts";
import ProgBar from "./PercentageBar";
const PercentageInfoConsumer = () => {
    const { mainIncome, percentageIncome } = useContext(ContextIncomeInfo)
    //console.log(totalBill)

      const test=[{ label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }]

    useEffect(()=>{

    }, [mainIncome])

    return (
        <Box>
            <CountUpNumber sx={{ variant: "h1", marginBottom: "1rem", textAlign: "center" }} endval={mainIncome}></CountUpNumber>
            <Typography sx={{ marginBottom: "1rem", textAlign: "start" }}>Persentasi Pemasukan</Typography>
            <ProgBar value={percentageIncome}></ProgBar>
        </Box>
    )
}
export default PercentageInfoConsumer