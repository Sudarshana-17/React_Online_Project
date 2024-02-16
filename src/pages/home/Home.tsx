import { Box, Grid } from "@mui/material"
import { MyNavbar } from "../../components/Navbar/MyNavbar"
import { MySlider } from "../../components/MySlider/MySlider"
import { ApiCaller } from "../../components/apicaller/ApiCaller"

export const Home:React.FC<{}>=()=>{
    return<>
    <Box>
    <Grid

direction="column"
justifyContent="center"
alignItems="stretch"
>
  <MyNavbar/>
  <br/>
  <>
  < MySlider/>
  </>
  < ApiCaller/>

</Grid>
        
    </Box>
    </>
}