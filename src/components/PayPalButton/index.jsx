import { Container, Box, Paper, Button } from "@mui/material"
const DonateBtn = () => {
    return <Box sx={{ p: 4, textAlign: "center" }}>
        <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="QD7NJS5R6VSWE" />
            <input type="hidden" name="item_name" value="infaq_operasional_masjid_alfalah" />
            <Button variant="contained" size="large" type="submit">Sedekah Sekarang</Button>
        </form>
    </Box>
}

export default DonateBtn