import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const entrypoint = {
  path: '/',
  element: <>
    <h1>where to go </h1>
    <Button variant="outlined" color="secondary">
      Home
    </Button>


    <Button variant="outlined" color="primary">
      About
    </Button>


    <Link to={"/pro/login"}>

      <Button variant="outlined" color="error">
        project
      </Button>
    </Link>
    <Link to={"/all-lessons"}>
      <Button variant="outlined" color="success">
        lessons
      </Button></Link>




  </>
}