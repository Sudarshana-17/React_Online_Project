
import { useRoutes } from "react-router-dom";
import { AllroutesOfLessons } from "./lessons.routes";
import { allProjectRoutes } from "./projectRotes.routes";
import { entrypoint } from "./entrypoint.routes";

export default function AllRoutes(){
  return useRoutes([AllroutesOfLessons,allProjectRoutes,entrypoint])  
}