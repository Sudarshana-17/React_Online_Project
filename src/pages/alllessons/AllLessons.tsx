import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { useState } from "react"
import { MyUseStateHook } from "../../components/hooks/MyuseStateHook"
import { Myfragment } from "../../components/fragment/Myfragment"
import { MyStarRating } from "../../components/mui/Mystarrating"
import { Inline } from "../../components/css/Inline"
import { Inpage } from "../../components/css/Inpage"
import { ExternalCss } from "../../components/css/ExternalCss"
import { NamingConvention } from "../../components/namingConvention/namingConvension"
import { Myimage } from "../../components/Myimage/Myimage"
import { MyCards } from "../../components/Myimage/MyCards"
import { CardConatiner } from "../../components/cards/CardContainer"
import { Sharing } from "../../components/Sharing/Sharing"
import { Email } from "../../components/Sharing/Email"
import { ApiCaller } from "../../components/apicaller/ApiCaller"
import { TakeNotes } from "../../components/TakeNotes/TakeNotes"


export const AllLessons: React.FC<{}>=()=>{
    let [number,setNumber]=useState('1')
    return<>
    <h1>all lessons</h1>
    <Box>
        <TabContext value={number}>
            <TabList onChange={(e,num)=>{setNumber(num)}}>
                <Tab label={"usestate"} value={'1'}/>
                <Tab label={"fragments"} value={'2'}/>
                <Tab label={"mui"} value={'3'}/>
                <Tab label={"types of css"} value={'4'}/>
                <Tab label={"naming convention"} value={'5'}/>
                <Tab label={"props"} value={'6'}/>
                <Tab label={"cards"} value={'7'}/>
                <Tab label={"sharing"} value={'8'}/>
                <Tab label={"Api calling"} value={'9'}/>
                <Tab label={"Take notes"} value={'10'}/>
            </TabList>

            <TabPanel value="1">
                <MyUseStateHook/>
            </TabPanel>

            <TabPanel value="2">
                <Myfragment/>
            </TabPanel>

            <TabPanel value="3">
                <MyStarRating/>
            </TabPanel>

            <TabPanel value="4">
                <Inline/>
                <Inpage/>
                <ExternalCss/>
            </TabPanel>

            <TabPanel value="5">
                <NamingConvention/>
            </TabPanel>

            <TabPanel value="6">
                <Myimage/>
            </TabPanel>

            <TabPanel value="7">
                <CardConatiner/>
            </TabPanel>

            <TabPanel value="8">
                <Sharing/>
                <Email/>
            </TabPanel>

            <TabPanel value="9">
                <ApiCaller/>
            </TabPanel>

            <TabPanel value="10">
                <TakeNotes/>
            </TabPanel>
        </TabContext>
    </Box>
    </>
}