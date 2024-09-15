import { useContext } from "react";
import { Dmode } from "../App";

export default function Mode(props){

    const mode = useContext(Dmode);

    return(
      <button onClick={()=>{props.setDarkMode(!props.darkMode)}}>{mode?"Light":"Dark"}</button>
    );
}