import { Grid } from "@mui/material"
import { MyCards } from "../Myimage/MyCards"
import img from "../../static/image/10.jpg"
import img2 from "../../static/image/5.jpg"
import img3 from "../../static/image/6.jpg"


export const CardConatiner:React.FC<{}>=()=>{

    let arry=[<MyCards img={img}/>,<MyCards img={img2}/>,<MyCards img={img3}/>]
    return <>
    <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
{ arry}
</Grid>
  </>
}