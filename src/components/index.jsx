import { Container, Box, Paper, Button } from "@mui/material"
import { useContext } from "react";
import Typography from '@mui/material/Typography';
import AppHeader from "./Header";
import DonateBtn from "./PayPalButton";
import IncomeInfoProvider from "../services/IncomeInfo";
import WebSocketHandler from "../services/WebSocketHandler";
import IncomeInfoConsumer from "./consumers/incomeInfoConsumer";
import BillInfoConsumer from "./consumers/billInfoConsumer";
import PercentageInfoConsumer from "./consumers/percentageInfoConsumer";
const Components = () => {
    return (
        <IncomeInfoProvider>
        <WebSocketHandler></WebSocketHandler>
            <Box bgcolor="white" height={"100vh"}  >
                <AppHeader />
                
                <Box sx={{ p: 1, bgcolor: "tomato", height: "100%" }}>
                    <Box sx={{ bgcolor: "#f8f9fc", marginTop: "1.5rem", marginBottom: "1.5rem", p: 2, boxShadow: 1 }}>
                        <PercentageInfoConsumer></PercentageInfoConsumer>
                        <DonateBtn />
                    </Box>

                    <Box sx={{ marginBottom: "1.5rem", height: "50%", display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                        <Box sx={{ p: 1, boxShadow: 3, bgcolor: "white" }}>Income
                            <IncomeInfoConsumer></IncomeInfoConsumer>
                        </Box>

                        <Box sx={{ p: 1, boxShadow: 3, bgcolor: "white" }}>Outcome
                        <BillInfoConsumer></BillInfoConsumer>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </IncomeInfoProvider>
    )
}
export default Components