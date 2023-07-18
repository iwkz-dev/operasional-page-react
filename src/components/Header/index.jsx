import { Container, Box, Paper, Link } from "@mui/material"
import Typography from '@mui/material/Typography';
import { currentMonth, currentYear } from "../../services/DateService";

const AppHeader=()=>{
    return(
        <>
        <Link sx={{marginTop:"1rem"}} display={"flex"} alignItems={"flex-end"} justifyContent={"center"} bgcolor="#fff" variant="h6" textAlign="left" href="#" underline="hover">
  {'Operasional Masjid Al-Falah'}
</Link>
            <Typography sx={{p:4, variant: "h3"}}> {currentMonth} {currentYear}</Typography></>
        )
}
export default AppHeader

