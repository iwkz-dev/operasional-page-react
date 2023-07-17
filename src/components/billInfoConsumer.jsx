import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import { ContextIncomeInfo } from "../services/IncomeInfo";
import CountUpNumber from "./CountUpNumber/countUp";
import PieChart from "./PieCharts";

const BillInfoConsumer = () => {
    const { bill, totalBillByType } = useContext(ContextIncomeInfo)
    //console.log(totalBill)

      const test=[{ label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }]

    useEffect(()=>{

    }, [bill])

    return (
        <Box>
            <CountUpNumber endval={bill}></CountUpNumber>
            <PieChart data={test}></PieChart>  {/**Replace with totalBillType */}
        </Box>
    )
}
export default BillInfoConsumer