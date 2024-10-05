import { Outlet,Link } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Rootelement(){

    return(
        <>
            <Navigation />
            <Outlet />
        </>
    )
}