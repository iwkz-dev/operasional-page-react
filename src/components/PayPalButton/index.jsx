import { Container, Box, Paper, Button } from "@mui/material"
const DonateBtn=()=>{
 return   <Box sx={{ p: 4, textAlign:"center"}}>
                        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <Button variant="contained" size="large" href={"https://www.sandbox.paypal.com/cgi-bin/webscr"}>Sedekah Sekarang</Button>
                        </form>
                    </Box>
}

export default DonateBtn