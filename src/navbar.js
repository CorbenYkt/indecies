import { Box } from "@mui/material";
import { Link } from "react-router-dom"
const navbar = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} columnGap={'1em'} fontSize={'1rem'} paddingTop={2} paddingBottom = { 2} >
            <Link to="/">Coins|Currency</Link>
            <Link to="/meteo">Meteo</Link>
            <Link to="/about">Me</Link>
        </Box >
    )
}
export default navbar;
