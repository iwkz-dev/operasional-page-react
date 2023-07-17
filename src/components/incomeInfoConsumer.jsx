import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { ContextIncomeInfo } from "../services/IncomeInfo";
import CountUpNumber from "./CountUpNumber/countUp";
import PieChart from "./PieCharts";

const IncomeInfoConsumer = () => {
    const { income, totalIncomeByType } = useContext(ContextIncomeInfo)

      const test=[{ label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }]

    useEffect(()=>{

    }, [income])

    return (
        <Box>
            <CountUpNumber endval={income}></CountUpNumber>
            <PieChart data={totalIncomeByType}></PieChart> {/**Replace with totalIncomeType */}
        </Box>
    )
}
export default IncomeInfoConsumer