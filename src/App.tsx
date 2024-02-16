import { BrowserRouter as History, Route ,Routes } from "react-router-dom"
import{ AllLessons } from "./pages/alllessons/AllLessons"
import { Home } from "./pages/home/Home"
import Myroutes from './routes'
 export let App=()=>{

  return <>
    <Myroutes/>
  </>
}