import { useEffect, useState } from "react"
import { MyCards } from "../Myimage/MyCards";
import { Grid } from "@mui/material";
import { flipkartApi } from "../../Api/FlipkartApi.service";




export const ApiCaller: React.FC<{}> = () => {
    let [data, setdata] = useState([])
    useEffect(() => {
        flipkartApi().then((a: any) => { setdata(a) });
    }, [])
    console.log(data)
    return <>
        <h1>this is an api calling</h1>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            {data.map((item: any) => {
                return <><MyCards img={item.image} />
                </>
            })}
        </Grid>
    </>
}